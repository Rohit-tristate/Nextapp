"use client"

import { toast } from "react-toastify";

export default function AlluserError(error){
    console.log(error)
    return(

        toast.error("something went wrong")
    )
}