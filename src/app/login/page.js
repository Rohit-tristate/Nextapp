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
import { UserRegistration, Userlogin } from "@/Components/Allapi";

export default function Login() {
  const [islogin, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [intitialLogin, setInitialLogin] = useState({
    user: "",
    password: "",
  });

  const [intitialsingup, setInitialSingup] = useState({
    user: "",
    password: "",
    Confirm_password: "",
  });

  const userLogin = useUser();
  console.log("userlogin", userLogin);

  const loginSchema = Yup.object().shape({
    user: Yup.string()
      .max(20, "user name is to long !")
      .required("user name is Required"),
    password: Yup.string().required("password is Required"),
  });

  const singupSchema = Yup.object().shape({
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
  // fffr
  const getLogin = async (data) => {
    try {
      setLoading(true);
      const res = await Userlogin(data);
      if (res) {
        userLogin.login(res[0]);
        router.push("/");
        toast.success("user login successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getRegister = async (data) => {
    setLoading(true);
    const res = await UserRegistration(data);
    if (res) setLogin(true);

    setLoading(false);
  };

  const formik = useFormik({
    initialValues: islogin ? intitialLogin : intitialsingup,
    enableReinitialize: true,
    validationSchema: islogin ? loginSchema : singupSchema,
    onSubmit: (values) => {
      if (islogin) {
        getLogin(values);
      } else {
        getRegister(values);
      }
    },
  });

  const { setFieldValue, handleChange, touched, handleSubmit, errors } = formik;
  console.log("error", errors);

  const toggleLogin = () => {
    setInitialLogin({
      user: "",
      password: "",
    });

    setInitialSingup({
      user: "",
      password: "",
      Confirm_password: "",
    });

    setLogin(!islogin);
  };

  return (
    <>
      <Paper className="mt-20 w-[50%] mx-auto p-5  ">
        {loading && <LinearProgress className="" />}
        <div className="flex relative justify-center  ">
          <ArrowBackIcon
            className="absolute left-1"
            onClick={() => router.push("/")}
          />
          <h1 className="text-center font-semibold text-xl ">
            {islogin ? "Login" : "Register"}{" "}
          </h1>
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

          {!islogin && (
            <div>
              <p> Confirm Password</p>
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
          )}

          <p className="flex justify-end ">
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
          </p>
        </form>

        <div>
          {!islogin && (
            <p
              className="flex justify-center text-[15px] hover:text-blue-800 cursor-pointer  mx-10 my-2 "
              onClick={toggleLogin}
            >
              Login
            </p>
          )}

          {islogin && (
            <div className="flex justify-center  ">
              <p
                className="flex  text-[15px] hover:text-blue-800 cursor-pointer   "
                onClick={toggleLogin}
              >
                Register /
              </p>

              <p className="flex  text-[15px] hover:text-blue-800 cursor-pointer ">
                <Link href="/adminlogin">Admin_Login</Link>
              </p>
            </div>
          )}
        </div>
      </Paper>
    </>
  );
}
