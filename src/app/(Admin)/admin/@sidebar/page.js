"use client";
import { Button, Paper } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useUser } from "@/Components/Context";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import AlertDialog from "@/Components/ProfileModal";

export default function sidebar() {
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
    <div className="min-h-[80vh] bg-gray-100 p-2  ">
      {open && (
        <AlertDialog
          open={open}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
        />
      )}
      <Paper className=" mx-2 p-2 relative  ">
        <div className="flex space-x-3 ">
          <div>
            <AccountCircleRoundedIcon className="   w-[100px]  h-[100px] p-1" />
          </div>
          <div className="flex items-center ">
            {context.admin === null ? (
              <p>Loading...</p>
            ) : (
              <div>
                <p>{context.admin.user.toUpperCase()}</p>
                <p className="text-[10px]">{context.admin._id}</p>
              </div>
            )}
          </div>
        </div>

        <div className="justify-end  absolute right-3 bottom-1 ">
          <p
            onClick={handleClickOpen}
            className="w-[70px] text-center  hover:bg-slate-800 hover:text-white  border border-slate-800 text-slate-800"
          >
            Edit
          </p>
        </div>
      </Paper>

      <div className="space-y-1 ">
        {/* <Paper className=" p-3 mx-2 flex    "></Paper> */}
        <Paper
          className={` ${
            path === "admin/add_admin" ? " bg-slate-800 text-white " : " "
          } mx-2 flex   hover:bg-slate-800 hover:text-white`}
        >
          <Link href="/admin/add_admin" className="w-full p-3 ">
            Add Admin
          </Link>{" "}
        </Paper>
        <Paper
          className={` ${
            path === "/admin/user" ? " bg-slate-800 text-white " : " "
          }  mx-2 flex   hover:bg-slate-800 hover:text-white `}
        >
          <Link href="/admin/user" className="w-full p-3 ">
            User
          </Link>{" "}
        </Paper>

        <Paper
          onClick={logout}
          className=" p-3 mx-2 flex   hover:bg-slate-800  hover:text-white "
        >
          logout
        </Paper>
      </div>
    </div>
  );
}
