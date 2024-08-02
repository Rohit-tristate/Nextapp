"use client";
import { getPostList } from "@/Components/Allapi";
import Updatepost from "@/Components/Createpost";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";
import { Paper } from "@mui/material";
import axios from "axios";
import { UNSTABLE_REVALIDATE_RENAME_ERROR } from "next/dist/lib/constants";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Edit({ params }) {
  const [userdata, setData] = useState(null);

  useEffect(() => {
    getdata(params.id);
  }, [params.id]);

  const getdata = async (id) => {
    try {
      let data = [];
      data = await getPostList();

      if (data?.message?.length === 0) {
        throw new Error("unable to fetch data");
      }
      console.log("data",data)
      const find = data?.message?.find((val) => val._id === id);
      console.log("find",find)
      if (find.length === 0) throw new Error("No records found");
      const obj = {
        post: find.post,
        title: find.title,
        user: find.user,
        tag: find.tag,
      };

      console.log("object",obj)

      setData({...obj,id:params.id});
    } catch (error) {
      return <p className="flex justify-center text-red-500">{error}</p>;
    }
  };

  console.log("sendata",userdata)
  
  if(userdata)
  return <div>  <Updatepost arr={userdata} /></div>;
}
