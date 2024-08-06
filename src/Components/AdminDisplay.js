"use client";
import { useEffect, useState } from "react";
import Admincard from "./Admincard";
import { useUser } from "./Context";

export default function AdminDisplay(props) {
  const [data, setData] = useState(props?.arr);
  const [filter, setFilter] = useState([]);

  const context = useUser();
  console.log("query", context);

  if (data.length === 0)
    return <p className="text-center "> No User Record Found</p>;

  let search = context.searchtext;

  useEffect(() => {
    let arr = [];

    if (search.length > 0) {
      arr = data.filter((val) =>
        val.user.toLowerCase().includes(search.toLowerCase())
      );
     

      if (arr.length > 0) setFilter(arr);
    } else {
      
      setFilter(data);
    }
  }, [search]);




  return (
    <div>
      <div className=" h-[400px] overflow-y-scroll scrollbar  scrollbar-track-slate-100   scrollbar-thumb-slate-700  ">
        {filter && filter.map((val) => <Admincard arr={val} />)}
      </div>
    </div>
  );
}
