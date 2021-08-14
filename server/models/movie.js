import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  tag: String,
  image: String,
  user_name: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Movie = mongoose.model("Movie", postSchema);

export default Movie;
