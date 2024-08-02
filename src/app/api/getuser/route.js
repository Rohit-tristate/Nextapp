import userdata from "@/models/user";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";
export const revalidate = 0
export const GET = async (req, res) => {
  try {
    await connectDb();

    const data = await userdata.find();

    return NextResponse.json({ message: data }, { status: 201 });
  } catch (error) {
    console.log("backend ", error);

    return NextResponse.json({ message: error }, { status: 400 });
  }
};
