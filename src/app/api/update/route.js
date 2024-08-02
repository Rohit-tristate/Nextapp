import postdata from "@/models/PostSchema";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";
export const revalidate = 0
export const PUT = async (req, res) => {
  try {
    console.log("update");

    await connectDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("id", id);
    const data = await req.json();
    
    console.log("data", data);

    const obj = {
      post: data.post,
      tag: data.tag,
      user: data.user,
      title: data.title,
      date: data.date,
    };

    const find = await postdata.findByIdAndUpdate(id, obj);

    console.log("find", find);

    if(find===null)
        return NextResponse.json({message:"unable to update date"},{status:401})

    return NextResponse.json({ message: "successfully updated" }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: error }, { status: 500 });
  }
};
