"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useUser } from "./Context";
import { toast } from "react-toastify";
import axios from "axios";
import CircularLoading from "./Circular";
import { useRouter } from "next/navigation";

import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect } from "react";

export default function AlertDialog(props) {
  const context = useUser();
  const router = useRouter();
  const [text, setText] = React.useState("");
  const [deletebtn, setDeleteBtn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const queryClient = useQueryClient();
   

   
  
  const {
    mutate: deleteUser,
    isLoading,
    error,
  } = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(
        `http://localhost:3000/api/deleteuser?id=${id}`
      );
    },
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ['postData'] })
      queryClient.invalidateQueries({ queryKey: ['userData'] })
     
    router.push("/admin/user")

    context.setActiveTab("all");

      handleClose();
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("Unable to Delete User");
    },
  });

  

  const handleClose = () => {
    props.handleClose();
  };
  const handleChange = (e) => {
    if (e.target.value.length === 6 && e.target.value === "Delete")
      setDeleteBtn(true);
    else {
      setDeleteBtn(false);
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {isLoading && <CircularLoading height="250px" />}
        <DialogTitle id="alert-dialog-title">{"Admin Pannel"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this user <br />
            To confirm please write{" "}
            <span className="text-red-500 ">Delete</span> in below field
          </DialogContentText>
          <TextField
            classes="my-2 "
            type="text"
            onChange={handleChange}
            id="outlined-basic"
            size="small"
            className="w-full"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button className="" onClick={handleClose}>
            Cancel
          </Button>

          {deletebtn && (
            <Button onClick={() => deleteUser(props?.userid)} autoFocus>
              Delete
            </Button>
          )}

          {!deletebtn && (
            <Button disabled autoFocus>
              Delete
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
