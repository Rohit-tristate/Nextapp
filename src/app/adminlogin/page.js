"use client";

import LoadingButtons from "@/Components/LoadingBtn";
import { Button, LinearProgress, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import SimpleBackdrop from "../loading";
import { useRouter } from "next/navigation";
import { useUser } from "@/Components/Context";
import Link from "next/link";
import {AdminLogin} from "@/Components/Allapi"

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const intitialLogin = {
    password: "",
    user: "",
  };
  const context = useUser();

  const adminSchema = Yup.object().shape({
    user: Yup.string()
      .max(20, "user name is to long !")
      .required("user name is Required"),
    password: Yup.string().required("password is Required"),
  });

  const getLogin = async (data) => {
    setLoading(true);
    const admindata = await AdminLogin(data)

    if (admindata) {
      context.setAdminLogin(admindata);
      router.push("/admin");
    }

    setLoading(false);
  };

  const formik = useFormik({
    initialValues: intitialLogin,
    validationSchema: adminSchema,
    onSubmit: (values) => {
      getLogin(values);
    },
  });

  const { setFieldValue, handleChange, touched, handleSubmit, errors } = formik;
  console.log("error", errors);

  return (
    <>
      <Paper className="mt-20 w-[50%] mx-auto p-5  ">
        {loading && <LinearProgress className="" />}
        <div className="flex relative justify-center  ">
          <h1 className="text-center font-semibold text-xl ">Admin Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="mx-10 space-y-4 ">
          <div>
            <p> UserName</p>
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
            <p> Password</p>
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

          {/* <di */}
          <div className="flex justify-end">
            {!loading ? (
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
          </div>

          <Link href="/login">
            <p className="flex justify-center text-[15px] text-center  hover:text-blue-800 ">
              UserLogin
            </p>
          </Link>
        </form>
      </Paper>
    </>
  );
}
