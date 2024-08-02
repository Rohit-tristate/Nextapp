"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page({ params }) {
  const [title, settitle] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    const obj = {
      name: title,
      pasword: "password",
    };

    try{

        const res = await axios.patch(`http://localhost:8000/post/1`, obj);

        router.push("/testapi")
    }catch(error){console.log(error)}
  };

  return (
    <div>
      <div className="w-[50%] h-[50%] mx-auto mt-20  border bg-gray-300 p-2 ">
        <div>
          <p>name</p>
          <input value={title} onChange={(e) => settitle(e.target.value)} />
        </div>

        <button onClick={handleSubmit} className="w-[100px] p-1 border ">
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
}

export const updatepost = async (data) => {};
