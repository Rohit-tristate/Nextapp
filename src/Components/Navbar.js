"use client";

import { Button, useStepContext } from "@mui/material";
import { singIn, singOut, useSession, getProviders } from "next-auth/react";

import usericon from "../../public/icons8-user-48.png";
import Recat, { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useUser } from "@/Components/Context";
import NameIcon from "./NameIcon";
import { revalidatePath } from "next/cache";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Navbar() {
  const router = useRouter();
  const path = usePathname();
  const userLogin = useUser();

  const Logout = () => {
    userLogin.logout();
  };

  console.log("userData", userLogin);

  return (
    <div className={`   w-full border mx-1 fixed top-0 bg-white    p-3  `}>
      <div className=" w-[80%] mx-auto  bg-white  flex items-center   justify-between  ">
        <div className="space-x-2  flex ">
          <p className="flex items-center ">
            {path === "/" ? null : (
              <button onClick={() => router.back()}>
                <ArrowBackIcon />{" "}
              </button>
            )}
          </p>

          <h1 className="font-semibold text-xl  bg-gradient-to-tr from-orange-300 to-orange-600 bg-clip-text text-transparent inline-block ">
            Propmptopia
          </h1>
        </div>
        <div className="   ">
          {userLogin && userLogin.user ? (
            <div className="flex space-x-5  ">
               <div className="flex items-center">
                <Button
                  onClick={() => router.push("/post")}
                  size="small"
                  variant="outlined"
                  className={`  border-black text-black  hover:bg-black hover:text-white  px-2 p-1 text-[10px]    `}
                >
                Create Post
                </Button>
              </div>

              <div className="flex items-center">
                <Button
                  onClick={Logout}
                  size="small"
                  variant="outlined"
                  className={` ${
                    path === "/login" ? " invisible " : " visible "
                  } border-black text-black  hover:bg-black hover:text-white p-1  px-2 text-[10px]    `}
                >
                 Logout
                </Button>
              </div>

              <div>
                {userLogin.user && (
                  <NameIcon name={userLogin?.user?.user?.charAt(0)} />
                )}
              </div>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => router.push("/login")}
                size="small"
                variant="outlined"
                className={` ${
                  path === "/login" ? " invisible " : " visible "
                } border-black text-black  hover:bg-black hover:text-white  px-2 text-[10px]    `}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
