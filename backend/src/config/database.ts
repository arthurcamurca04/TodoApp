import mongoose from 'mongoose';

export default mongoose.connect("mongodb+srv://admin_todoApp:G4p5h8G7yb8BukJu@cluster0.onij3.mongodb.net/TodoApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})