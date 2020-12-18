import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    require: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Todo', TodoSchema);