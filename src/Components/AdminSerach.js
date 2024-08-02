"use client";

import { useState } from "react";
import { useUser } from "@/Components/Context";

export default function Search() {
  const context = useUser();
 console.log("adminsearch",context)

  const [text, setText] = useState("");
  return (
    <div>
      <div className="flex items-center ">
        <input
          className="bg-gray-100 p-2 w-[300px] outline-slate-800  "
          onChange={(e) => context.setSearchTextValue(e.target.value)}
          type="text"
          placeholder="search"
        />
      </div>
    </div>
  );
}
