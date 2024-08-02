import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";
const adminSchema = new Schema({
  user: {
    type: String,
    required: [true, "user field is requred"],
  },
  password: {
    type: String,
    required: [true, "tag is requried"],
  },
});

const admindata = models.admindata || model("admindata", adminSchema);
export default admindata;
