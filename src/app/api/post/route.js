import postdata from "@/models/PostSchema";
import userdata from "@/models/user";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";
export const revalidate = 0
export const POST = async (req, res) => {
  try {
    await connectDb();
    const data = await req.json();
    let posts = [];

   
       

    console.log("postdata",data);

    const post = new postdata({
      post: data.post,
      tag: data.tag,
      user: data.user,
      title: data.title,
      date: data.date,
      userid: data._id,
      password: data.password,
    });
    

       const save= await post.save();

    return NextResponse.json({ message: "successfully" }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: error }, { status: 400 });
  }
};
