"use client";
import { Paper } from "@mui/material";
import React, { useState } from "react";
import Search from "@/Components/AdminSerach";
import { useUser } from "@/Components/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Adduser from "@/Components/Adduser";
import Mobilesearch from "@/Components/Mobilesearch";
import SearchIcon from '@mui/icons-material/Search';

const queryClient = new QueryClient();

export default function layout({ children }) {
  const context = useUser();

  const [openSearch,setOpenSearch]=useState(false)
  console.log("tab", context.activeTab);

  const toggleSearch=()=>{
    context.setSearchTextValue("")
    setOpenSearch(!openSearch )
  }

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
          <div className="md:block hidden " >
            <Search />
          </div>

          <div className="md:hidden flex items-center  " >
          <SearchIcon  onClick={toggleSearch}/>
          </div>
          
        </Paper>



        {/* for small screen  */}
      {  openSearch && <div className="md:hidden block">
            <Mobilesearch />
          </div>}

        {/* main  */}

        <Paper className="mx-3 mt-4">
          {context.activeTab === "all" && <div> {children}</div>}
          {context.activeTab === "add" && <Adduser />}
        </Paper>
      </QueryClientProvider>
    </div>
  );
}
