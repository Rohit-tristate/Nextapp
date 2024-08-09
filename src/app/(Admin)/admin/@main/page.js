"use client";
import { Totaluser, getPostList } from "@/Components/Allapi";
import Dashboarditem from "@/Components/DashboardItem";
import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function main() {
  const [totalPost, setTotalPost] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const postdata = await getPostList();
    const userdata = await Totaluser();

    setTotalPost(postdata.message.length)
    setTotalUser(userdata.message.length)
   
  };

  return (
    <Paper className=" ">
      <div className="h-[80vh] overflow-y-auto">
        <h1 className="flex justify-center text-2xl font-bold p-3 mt-3 max-[500px]:text-md ">
          Welcome to Dashboard
        </h1>

        <div className="md:grid grid-cols-3 mx-[10%] max-[450px]:mx-[2%]  md:space-y-1 space-y-5 p-3 mt-5 gap-4 text-center">
          <Dashboarditem
            total={  totalPost}
            para="Unlimited Post"
            title="Total Post"
          />
          <Dashboarditem
            total={totalUser}
            para="Free Registration"
            title="Total User"
          />
          <Dashboarditem
            total={13}
            para="Become a Admin"
            title=" Admin"
          />
        </div>
      </div>
    </Paper>
  );
}
