import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";
import { array } from "yup";


const userSchema = new Schema({
  user: {
    type: String,
    required: [true, "user field is requred"],
  },
  password: {
    type: String,
    required: [true, "tag is requried"],
  },

});

const userdata = models.userdata || model("userdata", userSchema);
export default userdata;
