"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Authentication({children}){   
    const path=usePathname();
    const router=useRouter();

    const userexist = localStorage.getItem("user");
    const isUserlogin = JSON.parse(userexist);
    console.log("Authentication",isUserlogin)


    if(path==="/post" && ! isUserlogin)
        {

            router.push("/")
            return 
        }


    return(
        <div>{children}</div>
    )
   
}