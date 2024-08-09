"use client";

import LoadingButtons from "@/Components/LoadingBtn";
import { Button, LinearProgress, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUser } from "@/Components/Context";
import SimpleBackdrop from "@/Components/Loading";
import * as React from "react";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const registerUser = async (data) => {
  const response = await axios.post("http://localhost:3000/api/Register", data);
  return response.data;
};

export default function Adduser() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const context = useUser();

  const [intitialAdmin, setInitialAdmin] = useState({
    user: "",
    password: "",
    Confirm_password: "",
  });

  // if(router.isFa)

  const AdminSchema = Yup.object().shape({
    user: Yup.string()
      .min(3, "user name is to short !")
      .max(20, "user name is to long !")
      .required("user name is required"),

    password: Yup.string()
      .required("password is required")
      .min(5, "Password must be at least 5 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      ),

    Confirm_password: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Passwords must match with Confirm password"
      )
      .required("confirm_password is required"),
  });

  const {
    mutate: register,
    isLoading: isRegistering,
    error: registerError,
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("User registered successfully");
      router.refresh();
      context.setActiveTab("all");
      // queryClient.invalidateQueries(['userData'])
      // queryClient.invalidateQueries(['postData'])
    },
    onError: (error) => {
      console.log("postError", error);
      toast.error("Unable to Register User");
    },
  });

  const formik = useFormik({
    initialValues: intitialAdmin,
    validationSchema: AdminSchema,
    onSubmit: (values) => {
      register(values);
    },
  });

  const { setFieldValue, handleChange, touched, handleSubmit, errors } = formik;
  console.log("error", errors);

  if (isRegistering) return <p className="flex justify-center ">Loading...</p>;
  if (registerError)
    return <p className="flex justify-center ">Unable To Fetch Data</p>;

  return (
    <>
      <Paper className="mt-20 md:w-[80%] mx-auto p-5  ">
        <div className="flex relative justify-center  ">
          {/* <ArrowBackIcon  className="absolute left-1" onClick={()=>router.back()} /> */}
          <h1 className="text-center font-semibold text-xl ">
            User Registeration
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="md:mx-10 space-y-4 ">
          <div>
            <p className="max-[500px]:text-[12px] "> UserName</p>
            <Paper className="border  ">
              <input
                onChange={handleChange}
                name="user"
                value={formik.values.user}
                type="text"
                className="p-2  border  w-full"
              />
            </Paper>

            {errors.user && touched.user && (
              <p className="text-xs   text-red-500 text-start my-1 ">
                {errors.user}
              </p>
            )}
          </div>

          <div>
            <p className="max-[500px]:text-[12px]"> Password</p>
            <Paper className="border  ">
              <input
                type="text"
                onChange={handleChange}
                name="password"
                value={formik.values.password}
                className="p-2  border  w-full"
              />
            </Paper>

            {errors.password && touched.password && (
              <p className="text-xs text-start my-1  text-red-500  ">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <p className="max-[500px]:text-[12px]" > Confirm Password</p>
            <Paper className="border  ">
              <input
                type="text"
                onChange={handleChange}
                name="Confirm_password"
                value={formik.values.Confirm_password}
                className="p-2 border  w-full"
              />
            </Paper>

            {errors.Confirm_password && touched.Confirm_password && (
              <p className="text-xs text-red-500 text-start my-1 ">
                {errors.Confirm_password}
              </p>
            )}
          </div>

          <p className="flex justify-end ">
            {!isRegistering ? (
              <Button
                type="submit"
                className="text-black border-black  hover:bg-black hover:text-white"
                variant="outlined"
              >
                Submit
              </Button>
            ) : (
              <LoadingButtons title="submitting..." />
            )}
          </p>
        </form>
      </Paper>
    </>
  );
}
