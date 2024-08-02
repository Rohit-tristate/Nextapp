"use client";
import AdminDisplay from "@/Components/AdminDisplay";
import Admincard from "@/Components/Admincard";

import { Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function page(props) {
  // const data = await getUserData();

  // const postdata = await getPostData();

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
    return <p className="flex justify-center ">Fetching...</p>;

  if (userDataError || postError) {
    console.log(userDataError);
    console.log(postError);
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

  return (
    <div>
      <p>{props.text}</p>
      <Paper className="grid grid-cols-9 space-x-2  bg-slate-800 text-white text-center   ">
        <p className="col-span-2 p-1 flex items-center justify-center   ">
          Name
        </p>
        <p className="col-span-2 p-1 flex  items-center justify-center ">
          Password
        </p>
        <p className="col-span-3 p-2  flex items-center  justify-center  ">
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
  try {
    const res = await axios("http://localhost:3000/api/getuser");

    if (res?.data?.message) return res.data.message;
  } catch (error) {
    console.log(error);
  }
};

const getPostData = async () => {
  try {
    const res = await axios("http://localhost:3000/api/Getpost");

    if (res?.data?.message) return res.data.message;
  } catch (error) {
    console.log(error);
  }
};
