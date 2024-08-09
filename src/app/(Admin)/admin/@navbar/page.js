"use client";
import { Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { redirect, usePathname, useRouter } from "next/navigation";
import Togglemenu from "@/Components/Togglemenu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function nav() {
  const router = useRouter();
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  console.log("path", path === "/admin");
  return (
    <>
      <Paper className="p-2  md:text-lg  lg:text-xl flex pl-3 justify-between  ">
        <div className="space-x-2 flex ">
          <p className={`${path === "/admin" ? " hidden " : " block "}`}>
            <ArrowBackIcon onClick={() => router.back()} />
          </p>

          <h1 className="text-slate-800  text-semibold ">Admin Pannel</h1>
        </div>

        <div className="flex  justify-end lg:hidden ">
          {openMenu ? (
            <CloseIcon onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <MenuIcon onClick={() => setOpenMenu(!openMenu)} />
          )}
        </div>
      </Paper>

      {/* menu for small  screen  */}
      <div className=" block lg:hidden ">{openMenu && <Togglemenu />}</div>
    </>
  );
}
