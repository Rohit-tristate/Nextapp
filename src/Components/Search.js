"use client";
import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Variants from "./Skeleton";

export default function Search(props) {
  const [data, setData] = useState(props?.arr);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  

  useEffect(() => {
    let arr = data;
    setLoading(true)

    if (search.length > 0) {
      const searchByUser = arr.filter((item) =>
        item.user.toLowerCase().includes(search.toLowerCase())
      );
      const searchByTag = arr.filter((item) =>
        item.tag.toLowerCase().includes(search.toLowerCase())
      );
      const searchByTitle = arr.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

      const seen = new Set();
      const combinedResults = [
        ...searchByUser,
        ...searchByTag,
        ...searchByTitle,
      ].filter((item) => {
        const key = item.title + item.user + item.tag; 
        return seen.has(key) ? false : seen.add(key);
      });


      setFilter(combinedResults);
    } else {
      setFilter(data);
    }

    setLoading(false)
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-white  mt-10">
      {/* searchbar  */}

      

      <Paper elevation={2} className="lg:w-[70%] md:w-[90%] xl:w-[50%] w-[90%]   mx-auto">
        <input
          style={{ outlineColor: "orange" }}
          value={search}
          className="w-full p-4"
          type="text"
          onChange={handleChange}
          name="search"
          placeholder="search "
        />
      </Paper>

      {/* display PostCard */}

      {loading ? (
        <p className="flex justify-center ">Fetching data...</p>
      ) : (
        <div className="xl:w-[70%] xl:mx-auto grid lg:grid-cols-3  md:grid-cols-2 lg:mx-20 gap-3 p-4 ">
         
          {filter?.length > 0 ? (
            filter.map((val) => <PostCard key={val._id} obj={val} />)
          ) : (
            <p className="text-center col-span-3 ">No post found</p>
          )}
        </div>
      )}
    </div>
  );
}
