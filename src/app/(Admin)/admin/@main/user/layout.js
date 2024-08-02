"use client";
import { Paper } from "@mui/material";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React, { useState } from "react";
import AlluserError from "./@alluser/error";
import Search from "@/Components/AdminSerach";
import { useUser } from "@/Components/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function layout({ children, adduser, alluser, removeuser }) {
  const [text, setText] = useState("");

  const context = useUser();
  console.log("tab", context.activeTab);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Paper className="mx-3 p-3 flex justify-between  ">
          <div className="flex sapce-x-2 ">
            <button
              onClick={() => context.setActiveTab("all")}
              className={`w-[70px]  p-2   ${
                context.activeTab === "all" &&
                " underline underline-offset-4  decoration-slate-700  decoration-4 "
              } `}
            >
              All user
            </button>
            <button
              onClick={() => context.setActiveTab("add")}
              className={`w-[70px]  p-2   ${
                context.activeTab === "add" &&
                " underline underline-offset-4  decoration-slate-700  decoration-4 "
              } `}
            >
              Add
            </button>
            <button
              onClick={() => context.setActiveTab("delete")}
              className={`w-[70px]  p-2   ${
                context.activeTab === "delete" &&
                " underline underline-offset-4  decoration-slate-700  decoration-4 "
              } `}
            >
              Delete
            </button>
          </div>
          {/* Search bar  */}
          <Search />
        </Paper>

        {/* main  */}

        <Paper className="mx-3 mt-4">
          {context.activeTab === "all" &&
            React.cloneElement(alluser, { key: "all" })}
          {context.activeTab === "add" &&
            React.cloneElement(adduser, { key: "add" })}
          {context.activeTab === "delete" &&
            React.cloneElement(removeuser, { key: "delete" })}
        </Paper>
      </QueryClientProvider>
    </div>
  );
}
