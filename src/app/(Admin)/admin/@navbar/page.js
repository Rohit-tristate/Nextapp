"use client";
import { Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { redirect, usePathname, useRouter } from "next/navigation";

export default function nav() {
  const router = useRouter();
  const path = usePathname();
  console.log("path",path==='/admin')
  return (
    <Paper className="p-2 space-x-1 text-xl flex pl-3   ">
      {path !== "/admin" && (
        <p>
          <ArrowBackIcon onClick={() => router.back()} />
        </p>
      )}

      <h1 className="text-slate-800  text-semibold ">Admin Pannel</h1>
    </Paper>
  );
}
