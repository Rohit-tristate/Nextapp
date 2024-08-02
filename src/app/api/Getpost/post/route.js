import postdata from "@/models/PostSchema";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";

export const revalidate = 0
export const POST=async(req,res)=>{
   
    try{

       await connectDb();
        const data=await req.json();
    
        const find=await postdata.findById(data.id)
       

        return NextResponse.json({message:find},{status:201})


    }catch(error){
        console.log(error)
       
        return NextResponse.json({message:error},{status:500})
    }
}