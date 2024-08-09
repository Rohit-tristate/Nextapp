"use client";
import { useEffect, useState } from "react";
import Admincard from "./Admincard";
import { useUser } from "./Context";
import Infocard from "./Infocard";

export default function AdminDisplay(props) {
  const [data, setData] = useState(props?.arr);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    setData(props?.arr);
  }, [props?.arr]);

  const context = useUser();

  if (data.length === 0)
    return <p className="text-center "> No User Record Found</p>;

  let search = context.searchtext;

  useEffect(() => {
    let arr = [];

    if (search.length > 0) {
      arr = data.filter((val) =>
        val.user.toLowerCase().includes(search.toLowerCase())
      );

      setFilter(arr);
    } else {
<<<<<<< HEAD
      
=======
>>>>>>> dev
      setFilter(data);
    }
  }, [search, data]);

  return (
    <div>
<<<<<<< HEAD
      <div className=" h-[400px] overflow-y-scroll scrollbar  scrollbar-track-slate-100   scrollbar-thumb-slate-700  ">
        {filter && filter.map((val) => <Admincard arr={val} />)}
=======
      <div className="hidden md:block  h-[400px] overflow-y-auto scrollbar-thumb-slate-800 ">
        {filter?.length===0 && (<p className="flex justify-center mt-5 ">No Records Found </p>)}
        {filter &&
          filter.map((val) => <Admincard key={val.userid} arr={val} />)}
      </div>

      <div className=" md:hidden block h-[400px] overflow-y-auto scrollbar-thumb-slate-800 space-y-3  ">
      {filter?.length===0 && (<p className="flex justify-center mt-5 ">No Records Found </p>)}
        {filter &&
          filter.map((val) => <Infocard key={val.userid} arr={val} />)}

>>>>>>> dev
      </div>
    </div>
  );
}
