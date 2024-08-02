"use client";

import { Paper } from "@mui/material";
// import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "./Context";
// import { useState } from "react";

export default function PostCard(props) {
  const router = useRouter();
  const userLogin = useUser();
  console.log("userlogin", userLogin);

  return (
    <Paper className={`p-3 h-[300px] `}>
      <div className="flex justify-between  ">
        <p className="font-bold text-[15px] ">{props.obj.title}</p>
        {userLogin.user && userLogin.user.user === props?.obj?.user && (
          <div>
            <button
              onClick={() => router.push(`/auth/Editpost/${props.obj._id}`)}
            >
              <EditIcon className="w-[20px]  hover:text-red-500" />
            </button>
          </div>
        )}
      </div>
      <p className="text-[12px] ">{props.obj.user}</p>
      <p className=" text-justify text-[15px] my-2 overflow-auto h-[70%] border p-1 ">
        {props.obj.post}
      </p>

      <div>
        <p className="text-[15px] p-1 my-2 w-[90%] overflow-x-auto  space-y-3  text-gray-500 ">
          {" "}
          {props.obj.tag}
        </p>
      </div>
    </Paper>
  );
}
