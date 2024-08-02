import userdata from "@/models/user";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";

export const DELETE = async (req, res) => {
  try {
    console.log("sdhhasdjsabdjkasbdasjdbasdns")
    await connectDb();
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");
    console.log("delteId",id)

    const result = await userdata.findByIdAndDelete(id);

    return NextResponse.json({ message: "delete" }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: error }, { status: 500 });
  }
};
