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
import { useRouter } from "next/navigation";

export default function Admincard(props) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  
  let hidden = <p>**********</p>;
  const name=props.arr.user;
  const userid=props.arr._id;
  const myObject = { name,userid};
  const queryString = `data=${encodeURIComponent(JSON.stringify(myObject))}`;
  const url = `/admin/user/${props.arr._id}?${queryString}`;
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

   return (
    <Paper className="  p-2  ">
      {open && <AlertDialog userid={props?.arr?._id} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}/>}
      <Paper className="grid grid-cols-9 space-x-2     ">
        <p className="col-span-2 p-1 border hover:bg-gray-200 flex items-center   justify-center  ">
          {props.arr.user}{" "}
        </p>
        <p className="col-span-2 p-1 border hover:bg-gray-200 flex justify-between items-center ">
          {show ? props.arr.password : hidden}
          <button onClick={() => setShow((prev) => !prev)}>
            {show ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
          </button>
        </p>
        <p className="col-span-3 p-2 border hover:bg-gray-200  flex items-center justify-center  ">
          {props.arr._id}{" "}
        </p>
        {/* <Link href={`/admin/user/${props?.arr?._id}`}> */}
        <Link href={url}>
        <p className="p-1  border hover:bg-gray-200 flex items-center justify-center  ">
          {props.arr.postcount}
        </p>
        </Link>


       
        
        


        <div className="flex items-center justify-center space-x-2 ">
          <div>
            <Tooltip className=" bg-white text-black " title="Delete">
              <DeleteIcon onClick={handleClickOpen} className="hover:text-red-500 " />
            </Tooltip>
          </div>
        
        </div>
      </Paper>
    </Paper>
  );
}
