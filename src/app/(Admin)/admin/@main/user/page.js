"use client";
import AdminDisplay from "@/Components/AdminDisplay";
import Variants from "@/Components/AdminVariants";
import Admincard from "@/Components/Admincard";

import { Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
export default function page(props) {
  const {
    data: userData,
    error: userDataError,
    isLoading: userLoading,
    isFetched: userFetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
  });

  const {
    data: postdata,
    error: postError,
    isLoading: postLoading,
    isFetched: postFetch,
  } = useQuery({
    queryKey: ["postData"],
    queryFn: getPostData,
  });

  if (userLoading || postLoading)
    return (
      <div>
        {Array(6)
          .fill()
          .map((_, i) => (
            <Variants key={i} />
          ))}
      </div>
    );

  if (userDataError || postError) {
    console.log("userDataError", userDataError);
    console.log("postError", postError);
    return <p className="flex justify-center ">somethings went wrong</p>;
  }

  if (!userData || !postdata)
    return <p className="flex justify-center ">No records found</p>;

  let temp = [];
  const filterUniqueData = () => {
    for (let i = 0; i < userData.length; i++) {
      const val = userData[i];
      let count = 0;
      for (let j = 0; j < postdata.length; j++) {
        if (postdata[j].userid === val._id) count++;
      }

      const obj = { ...val, postcount: count };
      temp.push(obj);
    }
  };

  filterUniqueData();

  console.log("temp", temp);

  return (
    <div className="  ">
      <p>{props.text}</p>
      <Paper className=" hidden  md:grid grid-cols-9 space-x-2  bg-slate-800 text-white text-center md:text-[14px] lg:text-auto    ">
        <p className="col-span-2 p-1 flex items-center justify-center   ">
          Name
        </p>
        <p className="col-span-2 p-1 flex    items-center justify-center ">
          Password
        </p>
        <p className="col-span-3 p-2 lg;text-auto  flex items-center  justify-center  ">
          UserID
        </p>
        <p className="p-1  flex items-center  justify-center ">Post</p>

        <div className="flex items-center justify-center ">Option</div>
      </Paper>

      {temp?.length > 0 && <AdminDisplay arr={temp} />}

    </div>
  );
}

const getUserData = async () => {
  const res = await axios("http://localhost:3000/api/getuser");

  if (res?.data?.message) return res.data.message;
};

const getPostData = async () => {
  const res = await axios("http://localhost:3000/api/Getpost");

  if (res?.data?.message) return res.data.message;
};
