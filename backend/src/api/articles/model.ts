import mongoose from '../../../db/mongoose';

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


export default mongoose.model('Articles', Schema);