"use client";
import { Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import AlertDialog from "./Dialog";
import Link from "next/link";
import { useUser } from "./Context";
import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from "next/navigation";

export default function Infocard(props) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  let hidden = <p>**********</p>;
  const name = props.arr.user;
  const userid = props.arr._id;
  const myObject = { name, userid };
  const queryString = `data=${encodeURIComponent(JSON.stringify(myObject))}`;
  const url = `/admin/user/${props.arr._id}?${queryString}`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=" p-2  border shadow-md  shadow-gray-200 text-[13px]   ">
      {open && (
        <AlertDialog
          userid={props?.arr?._id}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
      )}
      <div className="grid grid-cols-3    ">
        <p className=" border p-2 ">Name</p>
        <p className="px-2 p-1 border   hover:bg-gray-200 flex items-center  col-span-2   ">
          {props.arr.user}{" "}
        </p>

        <p className=" border p-2 ">Password</p>
        <p className=" px-2 p-1 border  hover:bg-gray-200 flex  col-span-2  justify-between items-center ">
          {show ? props.arr.password : hidden}
          <button onClick={() => setShow((prev) => !prev)}>
            {show ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
          </button>
        </p>

        <p className=" border p-2 ">UserId</p>
        <p className="px-2 p-1 border  hover:bg-gray-200  max-[450px]:text-[10px] flex items-center  col-span-2    ">
          {props.arr._id}{" "}
        </p>

        {/* <Link href={`/admin/user/${props?.arr?._id}`}> */}
        <p className=" border p-2">Post</p>

        <div className=" px-2 p-1 border  hover:bg-gray-200  flex items-center  justify-between col-span-2 ">
          <p>{props.arr.postcount}</p>
          <div>
          <Link className="w-full " href={url}>
            <ArrowRightAltIcon />
          </Link>

          </div>
         
        </div>

        <div className="col-span-3 p-2 flex justify-end mx-2 ">
          <div>
            <Tooltip className=" bg-white text-black " title="Delete">
              <DeleteIcon
                onClick={handleClickOpen}
                className="hover:text-red-500 "
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
