"use client";

import Error from "next/error";

export default function page() {
  const showError = () => {
    throw new Error("error");
  };
  return (
    <div>
      <button
        onClick={showError}
        className="border w-[100px] p-1 hover:bg-black hover:text-white"
      >
        Error
      </button>
    </div>
  );
}
