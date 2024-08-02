"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const router = useRouter();

  console.log("modal", props.params);
  const [open, setOpen] = React.useState(props.open);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    router.back();
    setOpen(false);
  };

  return (
    <div className="mt-20">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Image src={props?.params?.src} width={500} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
