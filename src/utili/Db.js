import mongoose from "mongoose";

let isConnected = false;
export const connectDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("already connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://Demo123:Password123@cluster1.pwktmd3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
      {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true;
    console.log("database connected");
  } catch (error) {
    // console.log(error);
    console.log("failed to  connect with database ");
  }
};
