"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Authentication(){
    const path=usePathname();
    const router=useRouter();
    console.log("Authentication")
    useEffect(()=>{
        const userExist=localStorage.getItem("user")
        const user=JSON.parse(userExist);
        console.log("insside useEffect")
        if(!user && path==="/post")
            {
                 router.push("/")
            }else{  
                console.log("path",path)
                 router.push(path)
            }

    },[])
}