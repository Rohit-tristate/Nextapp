"use client";

import { Paper } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import * as Yup from "yup";
import { useUser } from "@/Components/Context";
import LoadingButtons from "./LoadingBtn";
import { DeletePost } from "./Allapi";
export default function Updatepost(props) {
  const router = useRouter();
  const userLogin = useUser();
  const [loading, setLoading] = useState(false);
  console.log("propspost", props.arr);

  if (!props.arr) return <p>error</p>;

  const [initialdata, setInitialData] = useState({
    post: props.arr.post,
    title: props.arr.title,
    user: props.arr.user,
    tag: props.arr.tag,
  });

  useEffect(() => {
    const userexist = localStorage.getItem("user");
    const userdata = JSON.parse(userexist);
    if (!userdata) router.push("/");
  }, [userLogin]);

  const deletepost = async () => {
    const res = await DeletePost(props?.arr?.id);
    if (res) router.push("/");
  };

  const postSchema = Yup.object().shape({
    post: Yup.string()
      .min(100, "please enter atleast 100 character !")
      .max(300, "Maxium 300  character is allow only!")
      .required("Required"),
    tag: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: initialdata,
    // enableReinitialize: true,
    validationSchema: postSchema,
    onSubmit: async (values) => {
      console.log("submit", values);
      try {
        const currentDate = new Date().toDateString();
        const obj = { ...values, date: currentDate };
        const res = await updatePost(obj);
        console.log("res", res);
        if (res.status == 201) {
          toast.success("post update sucessfully");
          router.push("/");
          return;
        }

        if (res.response.status == 500) {
          toast.error("internal server Error");
          return;
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    },
  });

  const { handleChange, errors, handleSubmit, touched } = formik;

  const updatePost = async (values) => {
    try {
      setLoading(true);
      const userdata = localStorage.getItem("user");
      const userExist = JSON.parse(userdata);
      const obj = { ...values, ...userExist };
      console.log("values", obj);

      const res = await axios.put(
        `http://localhost:3000/api/update?id=${props.arr.id}`,
        obj
      );

      return res;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 w-[70%] mx-auto p-3  ">
      <Paper className="flex p-4  space-x-10 ">
        <div className="w-[50px] h-[50px] bg-orange-500 text-2xl  rounded-full flex items-center  justify-center  font-bold text-white">
          {formik?.values?.user?.charAt(0).toUpperCase()}
        </div>
        <div className="flex text-semibold text-xl  items-center ">
          {formik.values.user}
        </div>
      </Paper>

      <Paper className="p-3  mt-4 ">
        <div className="flex justify-end ">
          <DeleteIcon className="hover:text-red-500" onClick={deletepost} />
        </div>
        <form onSubmit={handleSubmit} className=" mx-10   ">
          <div className="mt-5 p-2  space-y-2    ">
            <div>
              <p>
                <span className="text-semibold">Title</span>{" "}
                <span className="text-gray-400 "></span>
              </p>

              <input
                onChange={handleChange}
                style={{ outlineColor: "orange" }}
                value={formik.values.title}
                name="title"
                type="text"
                className="w-full border-gray-400 p-2 border mt-2  "
              ></input>
              {errors.title && touched.title && (
                <p className="text-xs text-red-500 mt-1 ">{errors.title}</p>
              )}
            </div>
            <p>Your Ai prompt</p>

            <textarea
              name="post"
              value={formik.values.post}
              onChange={handleChange}
              placeholder="write your post here"
              className="bg-white border p-2 outline-none  border-gray-300"
              rows={5}
              cols={106}
            ></textarea>

            {errors.post && touched.post && (
              <p className="text-xs text-red-500  ">{errors.post}</p>
            )}
          </div>

          <div className="p-2 ">
            <p>
              <span className="text-semibold">Tag</span>{" "}
              <span className="text-gray-400 ">
                (idea,product,development){" "}
              </span>
            </p>

            <input
              style={{ outlineColor: "orange" }}
              onChange={handleChange}
              value={formik.values.tag}
              name="tag"
              type="text"
              className="w-full border-gray-400 p-2 border mt-2  "
            ></input>
            {errors.tag && touched.tag && (
              <p className="text-xs text-red-500 mt-1 ">{errors.tag}</p>
            )}

            <div className="flex justify-end space-x-3  mt-5 ">
              <button
                onClick={() => router.push("/")}
                type="button"
                className="border p-1 border-black  rounded-sm  hover:bg-black hover:text-white  w-[100px] "
              >
                Cancel
              </button>

              {loading ? (
                <LoadingButtons title="updating..." />
              ) : (
                <button className="border p-1 border-black  rounded-sm hover:bg-black hover:text-white  w-[100px] ">
                  Update
                </button>
              )}
            </div>
          </div>
        </form>
      </Paper>
    </div>
  );
}
export const fetchCache = "force-no-store";
