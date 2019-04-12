import mongoose from '../../../db/mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  addedBy: {
    ref: 'User',
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
},
{ timestamps: true, collection: 'Articles' });


export default mongoose.model('Articles', Schema);
