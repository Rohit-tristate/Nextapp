"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Authentication(){   
    const path=usePathname();
    const router=useRouter();
    console.log("Authentication")
   
}