// "use client";
import Link from "next/link";

import { Roboto } from "next/font/google";
import PostDisplay from "@/Components/PostDisplay";
 import Main from './(main)/page'

import Navbar from "@/Components/Navbar";
const roboto = Roboto({
  weight: "100",
  subsets: ["cyrillic"],
  display: "swap",
});



export default function Home() {

 


  
  

  return (
    <div className=" mt-20 ">
      <Navbar/>
     

      <section className=" bg-white  space-y-5  ">
        <h1 className="font-bold text-5xl  mx-auto   flex justify-center  ">
          Discover & Share
        </h1>

        <div className="flex justify-center ">
          <h1 className="font-bold text-5xl   text-transparent  bg-clip-text  justify-center inline-block  bg-gradient-to-br  from-orange-300 to-orange-500  text-center  ">
            AI Powerered Prompts
          </h1>
        </div>

        <div className="flex justify-center mt-3 text-gray-400 ">
          <p className="text-center w-[30%] ">
            Promptopia is an open ,source Ai prompting tools for Modern world To
            discover, create and share creative prompts{" "}
          </p>
        </div>
      </section>
     


      <section>


        <PostDisplay />
   
      </section>
    </div>
  );
}
