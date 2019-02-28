const mongoose = require('../../db/mongoose');

const Schema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true, collection: 'Articles' });


module.exports = mongoose.model('Articles', Schema);