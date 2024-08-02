


import postdata from "@/models/PostSchema";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";
export const revalidate = 0
export const GET = async (req) => {
  try {
    console.log("getting a user from api")
    await connectDb();

    const data = await postdata.find();

    if (data) {
      const response = NextResponse.json({ message: data }, { status: 200 });
      // Add Cache-Control header to prevent caching
      response.headers.set('Cache-Control', 'no-store');
      return response;
    } else {
      throw new Error("Record not found");
    }
  } catch (error) {
    console.log(error);
    const response = NextResponse.json({ message: error.message }, { status: 400 });
    // Add Cache-Control header to prevent caching
    response.headers.set('Cache-Control', 'no-store');
    return response;
  }
};







// import postdata from "@/models/PostSchema";
// import { connectDb } from "@/utili/Db";
// import { NextResponse } from "next/server";

// export const GET = async (req, res) => {
//   try {
//     await connectDb();

//     const data = await postdata.find();

//     if (data) return NextResponse.json({ message: data }, { status: 201 });
//     else throw new Error("Record not found");
//   } catch (error) {
//     console.log(error);

//     return NextResponse.json({ message: error }, { status: 400 });
//   }
// };
