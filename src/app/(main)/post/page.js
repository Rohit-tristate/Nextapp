"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUser } from "@/Components/Context";
import { useFormik } from "formik";
import LoadingButtons from "@/Components/LoadingBtn";
import { NewPost } from "@/Components/Allapi";

const postSchema = Yup.object().shape({
  post: Yup.string()
    .min(100, "Please enter at least 100 characters!")
    .max(500, "Maximum 500 characters allowed!")
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

const initialvalues = {
  post: "",
  tag: "",
  title: "",
};

export default function page() {
  const router = useRouter();
  const userLogin = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userexist = localStorage.getItem("user");
    const userdata = JSON.parse(userexist);
    if (!userdata) router.push("/");
  }, [userLogin]);

  const createPost = async (values) => {
    setLoading(true);
    const res = await NewPost(values);
    if (res) router.push("/");
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: initialvalues,

    validationSchema: postSchema,
    onSubmit: async (values) => {
      console.log("submit", values);
      try {
        const currentDate = new Date().toDateString();
        const obj = { ...values, date: currentDate };
        const res = await createPost(obj);
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    },
  });

  const { handleChange, errors, handleSubmit, touched } = formik;

  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit} className="w-[50%] mx-auto">
        <h1 className="text-5xl font-semibold text-blue-500 text-left mt-5">
          Create Post
        </h1>
        <p className="mt-4 text-gray-400">
          The English prefix post- means “after.” Examples using this prefix
          include postgame and postseason. An easy way to remember that the
          prefix post- means “after” is through the word postpone, for when you
          postpone something, you put it on your agenda to do “after” the
          current time.
        </p>
        <div className="mt-5 p-2 space-y-2">
          <div>
            <p>
              <span className="text-semibold">Title</span>{" "}
              <span className="text-gray-400"></span>
            </p>
            <input
              style={{ outlineColor: "orange" }}
              name="title"
              type="text"
              className="w-full border-gray-400 p-2 border mt-2"
              onChange={handleChange}
            />
            {errors.title && touched.title && (
              <p className="text-xs text-red-500 mt-1 ">{errors.title}</p>
            )}
          </div>

          <div>
            <p>Description</p>
            <textarea
              name="post"
              placeholder="Write your post here"
              className="bg-white border p-2 outline-none border-gray-300"
              rows={5}
              cols={85}
              onChange={handleChange}
            />
            {errors.post && touched.post && (
              <p className="text-xs text-red-500 mt-1 ">{errors.post}</p>
            )}
          </div>

          <div className="">
            <div>
              <p>
                <span className="text-semibold">Tag</span>{" "}
                <span className="text-gray-400">
                  (idea, product, development)
                </span>
              </p>
              <input
                style={{ outlineColor: "orange" }}
                name="tag"
                type="text"
                onChange={handleChange}
                className="w-full border-gray-400 p-2 border mt-2"
              />
              {errors.tag && touched.tag && (
                <p className="text-xs text-red-500 mt-1 ">{errors.tag}</p>
              )}
            </div>
            <div className="flex justify-end space-x-3 mt-5">
              <button
                onClick={() => {
                  router.push("/");
                }}
                type="button"
                className="border p-1 border-black rounded-sm hover:bg-black hover:text-white w-[100px]"
              >
                Cancel
              </button>
              {loading ? (
                <LoadingButtons title="posting..." />
              ) : (
                <button
                  type="submit"
                  className="border p-1 border-black rounded-sm hover:bg-black hover:text-white w-[100px]"
                >
                  Create
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
