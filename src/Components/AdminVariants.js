import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Paper className="grid grid-cols-9 space-x-2     ">
        <p className="col-span-2 p-1 border hover:bg-gray-200 flex items-center   justify-center  ">
          <Skeleton variant="rectangular" className="w-full p-5 h-[20px] " />
        </p>
        <p className="col-span-2 p-1 border hover:bg-gray-200 flex justify-between items-center ">
          <Skeleton variant="rectangular" className="w-full p-5 h-[20px] " />
        </p>
        <p className="col-span-3 p-2 border hover:bg-gray-200  flex items-center justify-center  ">
          <Skeleton variant="rectangular" className="w-full p-5 h-[20px] " />
        </p>
        {/* <Link href={`/admin/user/${props?.arr?._id}`}> */}

        <p className="p-1  border hover:bg-gray-200 flex items-center justify-center  ">
          <Skeleton variant="rectangular" className="w-full p-5 h-[20px] " />
        </p>

        <p className="flex items-center justify-center space-x-2 ">
          <Skeleton variant="rectangular" className="w-full p-5 h-[20px] " />
        </p>
      </Paper>
    </Stack>
  );
}
