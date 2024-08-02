"use client";
import axios from "axios";

import Search from "./Search";
import { toast } from "react-toastify";
import SimpleBackdrop from "./Loading";
import arr from "./Imagearr";
import { useEffect, useState } from "react";
import { getPostList } from "./Allapi";

export default  async  function PostDisplay() {
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

        console.log("homepage",result.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };


  

  return (
    <div className="bg-white  mt-10">
      {(data && data.length > 0) ? (
        <Search arr={data} />
      ) : (
        <p className="flex justify-center ">Fetching data...</p>
      )}
    </div>
  );
}


// export const getPostList = async () => {
//   try {
//     // const res = await fetch("http://localhost:3000/api/Getpost", {
//     //   cache: "no-store",
//     // });
//     console.log("api")

//     const res = await fetch("http://localhost:3000/api/Getpost", {
//       cache: 'no-store' 
//     });
//     const result = await res.json();
  
//     return result;
//   } catch (error) {
//     console.log("Postlist".error);
//   }
// };


