"use client";
import { NextResponse } from "next/server";

const isUserAuthenticated = () => {
  const userToken = localStorage.getItem("user");
  const userexist = JSON.parse(userToken);
  console.log("localstroge", userexist);

  return !!userexist;
};

export function middleware(req) {
  //   console.log("middelware execute");
  //   if (req.nextUrl.pathname === "/post") {
  //     if (isUserAuthenticated()) {
  //       return NextResponse.redirect(new URL("/", req.url));
  //     }
  //   }
  //   return NextResponse.next();
}

export const config = {
  matcher: ["/post"],
};
