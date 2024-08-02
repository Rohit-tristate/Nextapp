import admindata from "@/models/Admin";
import { connectDb } from "@/utili/Db";
import { NextResponse } from "next/server";


export const POST=async(req,res)=>{
   
    try{

       await connectDb();
        const data=await req.json();

       
    
        const find=await admindata.find();
        console.log("resdata",find)

        if(!find)
            throw new Error("unable to fetch data")

        const userexist=find.find((val)=>val.user===data.user && val.password===data.password)

        console.log("userexist",userexist)
        if(userexist)
            return NextResponse.json({message:userexist},{status:201})
        else
             return NextResponse.json({message:"user not found"},{status:404})


    }catch(error){
        console.log(error)
       
        return NextResponse.json({message:error},{status:500})
    }
}