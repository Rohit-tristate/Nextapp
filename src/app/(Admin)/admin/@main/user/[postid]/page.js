"use client"
import NameIcon from "@/Components/NameIcon";
import UserPostcard from "@/Components/UserPostCard";
import { Paper } from "@mui/material";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default  function userpost({ params }) {
  console.log("postid", params);
  const allpost = [];
  const searchParams = useSearchParams();
  const dataParam = searchParams.get('data');
  const [data,setData]=useState([]);


  console.log("searchparam",dataParam)
  let myObject = {};
  if (dataParam) {
    try {
      myObject = JSON.parse(decodeURIComponent(dataParam));
    } catch (e) {
      console.error('Failed to parse object:', e);
    }
  }


   const getPostData = async () => {
    try {
      const res = await axios("http://localhost:3000/api/Getpost");
      // console.log("res",res.data.message);
      if (res?.data?.message) setData(res.data.message)
    } catch (error) {
      console.log(error);
     return<p className="text-red-500 flex justify-center ">Something Went Wrong ,Please try After Sometime</p>
    }
  };

   useEffect(()=>{
     getPostData();

   },[])

  

  

  
  



  const finddata = data.filter((val) => val.userid === params.postid);
  console.log("responsedata" ,finddata);



  return (
    <div className="w-full p-3 space-y-5    ">
      <Paper className="flex space-x-7 px-2  ">
        <div className="flex items-center  ">
          <NameIcon name={myObject?.name?.charAt(0)?.toUpperCase()} />
        </div>
        <div className="p-2 space-y-1 ">
          <p className="flex items-center text-xl  md:text-2xl">{myObject?.name} </p>
          <p className="md:text-xs max-[450px]:text-[10px]  text-gray-500  ">{myObject?.userid}</p>
        </div>
      </Paper>

      <Paper className="p-2 min-h-[150px] border h-[400px] overflow-auto space-y-5  ">
        {finddata && finddata?.length > 0 ? (
          <div>
            {finddata && finddata.map((val) => <UserPostcard arr={val} />)}
          </div>
        ) : (
          <Paper className="p-3 flex justify-center items-center  text-[12px]  md:text-xl  text-gray-500 font-bold  ">
            No post Found
          </Paper>
        )}
      </Paper>
    </div>
  );
}
  


