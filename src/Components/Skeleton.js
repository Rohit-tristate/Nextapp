import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack
      spacing={1}
      className="border p-2 mx-auto w-full h-[250px] relative "
    >
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        className="w-full h-[30px]"
      />
      {/* For other variants, adjust the size with `width` and `height` */}

      <Skeleton variant="rectangular" className="w-[50%] h-[20px] " />

      <Skeleton variant="rectangular" className="w-full h-[50%]" />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        className="w-full h-[30px]"
      />
    </Stack>
  );
}
