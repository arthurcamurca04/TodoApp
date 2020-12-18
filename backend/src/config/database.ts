import mongoose from 'mongoose';

export default mongoose.connect("mongodb+srv://<username>:<dbpassword>@cluster0.onij3.mongodb.net/<dbname>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})
