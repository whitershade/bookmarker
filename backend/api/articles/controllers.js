const { pick } = require('lodash');
const read = require('node-readability');
const Model = require('./model');

exports.getItems = async (req, res, next) => {
  try {
    const items = await Model
      .find({})
      .lean();

    res.send(items);
  } catch (e) {
    next(e);
  }
};

exports.getItem = async (req, res, next) => {
  try {
    const item = await Model
      .findOne({ _id: req.params.id })
      .lean();

    if (!item) res.status(404).send('article not found');

    res.send(item);
  } catch (e) {
    next(e);
  }
};

exports.createItem = (req, res, next) => {
  const { url } = req.body;

  read(url, async (err, result) => {
    if (err || !result) res.status(500).send('Error downloading article');

    const newItem = new Model({
      title: result.title,
      content: result.content
    });

    try {
      const savedItem = await newItem
        .save();

      res.send(savedItem);
    } catch (e) {
      next(e);
    }
  });
};

exports.patchItem = async (req, res, next) => {
  const body = pick(req.body, ['title', 'text']);

  try {
    const updatedItem = await Model
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: body },
        { 'new': true }
      )
      .lean();

    if (!updatedItem) res.status(404).send('article not found');

    res.send(updatedItem);
  } catch(e) {
    next(e);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Model
      .findOneAndRemove({ _id: req.params.id });

    if (!item) res.status(404).send('article not found');

    res.send(item._id);
  } catch (e) {
    next(e);
  }
};
