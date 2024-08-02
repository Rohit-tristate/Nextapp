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
      console.log("initialdata");
      setFilter(data);
    }
  }, [search]);




  return (
    <div>
      <div className=" h-[400px] overflow-y-auto scrollbar-thumb-slate-800 ">
        {filter && filter.map((val) => <Admincard arr={val} />)}
      </div>
    </div>
  );
}
