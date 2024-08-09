"use client";
import axios from "axios";

import Search from "./Search";
import { toast } from "react-toastify";
import SimpleBackdrop from "./Loading";
import arr from "./Imagearr";
import { useEffect, useState } from "react";
import { getPostList } from "./Allapi";
import Variants from "./Skeleton";

export default async function PostDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      setLoading(true);
      const result = await getPostList();
      if (result) {
        setData(result.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white  mt-10">
      {data && data.length > 0 ? (
        <Search arr={data} />
      ) : (
        <div className="lg:w-[70%] grid grid-cols-3 gap-2  xl:w-[50%]   mx-auto">
          <Variants/>
          <Variants/>
          <Variants/>
          </div>

      )}
    </div>
  );
}


