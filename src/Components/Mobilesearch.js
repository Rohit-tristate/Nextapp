"use client";

import { useState } from "react";
import { useUser } from "@/Components/Context";

export default function Mobilesearch() {
  const context = useUser();

  return (
    <div className="mx-3  p-3 flex justify-center  ">
      <div className="flex items-center  w-full ">
        <input
          className="border  p-2 w-full outline-slate-800  "
          onChange={(e) => context.setSearchTextValue(e.target.value)}
          type="text"
          placeholder="search"
        />
      </div>
    </div>
  );
}
