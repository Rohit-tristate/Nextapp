import postdata from "@/models/PostSchema";
import userdata from "@/models/user";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";


export const POST=async(req,res)=>{
   
    try{

       await connectDb();
        const data=await req.json();


         const post=new userdata({
            user:data.user,
            password:data.password,
            
       })

       const save= await post.save();

        return NextResponse.json({message:"successfully"},{status:201})


    }catch(error){
        console.log(error)
       
        return NextResponse.json({message:error},{status:400})
    }
}