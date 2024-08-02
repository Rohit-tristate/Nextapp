import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";
const postSchema = new Schema({
  post: {
    type: String,
    required: [true, "post field is requred"],
  },
  tag: {
    type: String,
    required: [true, "tag is requried"],
  },
  user: { type: String },
  title: { type: String },
  date: { type: String },
  userid: { type: String },
  password: { type: String },

});

const postdata = models.postdata || model("postdata", postSchema);
export default postdata;
