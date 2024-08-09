"use client";
import { Button, Paper } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useUser } from "@/Components/Context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from "@/Components/ProfileModal";

export default function Togglemenu() {
  const context = useUser();
  const path = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  console.log("dashboardcontext", context);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout=()=>{
    context.logoutAdmin();
    router.push("/adminlogin")
  }

  return (
    <div className=" mt-2 border  ">
      {open && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
        />
      )}
      <Paper className="  p-2 ">
        <div className="">
          <div className="flex justify-center  ">
            <AccountCircleRoundedIcon className="   w-[100px]  h-[100px] p-1" />
          </div>
          <div className=" flex items-center justify-center   ">
            {context.admin === null ? (
              <p>Loading...</p>
            ) : (
              <div>
                <div className="text-center  flex justify-center   ">
                <p className="text-center ">{context.admin.user.toUpperCase()}</p>
               
                </div>
                <p className="text-[10px] ">{context.admin._id}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end ">
          <p
            onClick={handleClickOpen}
            className="w-[70px] text-center mx-2  hover:bg-slate-800 hover:text-white  border border-slate-800 text-slate-800"
          >
            Edit
          </p>
        </div>
      </Paper>

      <div className=" bg-white p-2 space-y-2 ">
        {/* <Paper className=" p-3 mx-2 flex    "></Paper> */}
        <Paper
          className={` ${
            path === "/admin/add_admin" ? " bg-slate-800 text-white " : " "
          }   border flex   hover:bg-slate-800 hover:text-white`}
        >
          <Link href="/admin/add_admin" className="w-full p-3 ">
            Add Admin
          </Link>{" "}
        </Paper>
        <Paper
          className={` ${
            path === "/admin/user" ? " bg-slate-800 text-white " : " "
          }   border flex   hover:bg-slate-800 hover:text-white `}
        >
          <Link href="/admin/user" className="w-full p-3 ">
            User
          </Link>{" "}
        </Paper>

        <Paper
          onClick={logout}
          className=" p-3  border  flex   hover:bg-slate-800  hover:text-white "
        >
          logout
        </Paper>
      </div>
    </div>
  );
}
