import { pick } from 'lodash';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../../exceptions/HttpException';

import read, { callbackResult } from 'node-readability';

import Model from './model';

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Model
      .find({})
      .lean();

    res.send(items);
  } catch (e) {
    next(e);
  }
};

export const getItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await Model
      .findOne({ _id: req.params.id })
      .lean();

    if (!item) return next(new HttpException(404, 'article not found'));

    res.send(item);
  } catch (e) {
    next(e);
  }
};

export const createItem = (req: Request, res: Response, next: NextFunction) => {
  const { url } = req.body;

  read(url,async (err: Error, result: callbackResult) => {
    if (err || !result) return next(new HttpException(500, 'Error downloading article'));

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

export const patchItem = async (req: Request, res: Response, next: NextFunction) => {
  const body = pick(req.body, ['title', 'text']);

  try {
    const updatedItem = await Model
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: body },
        { 'new': true }
      )
      .lean();

      if (!updatedItem) return next(new HttpException(404, 'article not found'));

    res.send(updatedItem);
  } catch(e) {
    next(e);
  }
};

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = await Model
      .findOneAndRemove({ _id: req.params.id });

    if (!item) return next(new HttpException(404, 'article not found'));

    res.send(item._id);
  } catch (e) {
    next(e);
  }
};