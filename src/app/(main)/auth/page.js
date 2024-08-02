'use client'
import { useSession, signIn, signOut } from "next-auth/react";

export default function Auth() {
  // const { data: session } = useSession();
  // console.log("auth",session)
  // return (
  //   <div className="mt-20">
  //     <h1>Authentication</h1>

  //     {session ? (
  //       <div>
  //         <h1>user login successfully</h1>
  //         <button  className="border w-[100px] bg-black text-white p-1 " onClick={signOut} >Logout</button>
  //       </div>
  //     ) : (
  //       <div>
  //         <h1>please login first</h1>
  //         <button  className="border w-[100px] bg-black text-white p-1 " onClick={signIn} >login</button>

  //       </div>
  //     )}
  //   </div>
  // );


  return<div>Login</div>
}
