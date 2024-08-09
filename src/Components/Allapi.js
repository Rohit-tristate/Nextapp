import axios from "axios";
import { toast } from "react-toastify";
export const revalidate = 0; //
export const getPostList = async () => {



  try {

    const res = await fetch(process.env.GET_POSTLIST_URL, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("Postlist".error);
  }
};

// USER LOGIN

export const Userlogin = async (credintial) => {
  try {
    const res = await axios.post(process.env.USER_LOGIN_URL, credintial);
    if (res.data.message.length > 0) {
      return res.data.message;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Loginuser", error);
    if (error.response.status == "401") {
      toast.warning("wrong Credintials");
      throw new Error("wrong_credintial");
    }

    console.log("loginuser", error);

    toast.error("something went wrong");
  }
};

//   USER REGISTERATION

export const UserRegistration = async (credintial) => {
  try {
    const res = await axios.post(process.env.USER_REGISTRATION_URL, credintial);
    toast.success("user register successfully ");
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong");
  }
};

//   CREATE A NEW POST

export const NewPost = async (post) => {
  try {
    const userdata = localStorage.getItem("user");
    const userExist = JSON.parse(userdata);
    const obj = { ...post, ...userExist };
    const res = await axios.post(process.env.NEWPOST_URL, obj);

    if (res.status === 201) {
      toast.success("Post Created Successfully");
      return true;
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

// GET PARTICULAR USER DATA BY ID

export const GetUserDataByID = async (id) => {
  try {
    const res = await axios.post(process.env.GETDATA_BY_ID_URL, {
      id,
    });

    const obj = {
      post: res.data.message.post,
      title: res.data.message.title,
      user: res.data.message.user,
      tag: res.data.message.tag,
    };
    return obj;
  } catch (error) {
    console.log("getUserDataById", error);

    toast.error("something went wrong ");
  }
};

// DELETE POST

export const DeletePost = async (id) => {
  try {
    if (window.confirm("do you want to delete this post")) {
      const res = await axios.delete(`${process.env.DELETE_POST_URL}?id=${id}`);

      toast.success("post is delete sucessfully");
      return true;
    }
  } catch (error) {
    console.log(error);
    return toast.error("unable to delete post");
  }
};

// ADMIN LOGIN

export const AdminLogin = async (data) => {
  try {
    const res = await axios.post(process.env.ADMIN_LOGIN_URL, data);

    if (res?.data?.message) {
      toast.success("user login successfully");
      return res.data.message;
    }
  } catch (error) {
    console.log("Adminlogin", error);

    toast.error("Uunable to login user");
  }
};

// ADD ADMIN
export const AddAdmin = async (data) => {
  try {
    const res = await axios.post(process.env.ADD_ADMIN_URL, data);
    toast.success("Admin register successfully ");

    return true;
  } catch (error) {
    console.log(error);
    toast.error("Unable to Register User");
  }
};

export const Totaluser = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/getuser", {
      headers: {
        "Cache-Control": "no-store",
      },
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    toast.error("something went Wrong");
  }
};
