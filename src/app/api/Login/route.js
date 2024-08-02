import userdata from "@/models/user";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDb();
    const data = await req.json();
    const user = await userdata.find();

    

    const finduser = user.filter(
      (val) => (val.user == data.user && val.password ===data.password)
    );


    if (finduser.length === 0) {
      return NextResponse.json(
        { message: "user does not exist" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: finduser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
