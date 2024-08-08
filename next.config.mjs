/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      GET_POSTLIST_URL: "http://localhost:3000/api/Getpost",
      USER_LOGIN_URL: "http://localhost:3000/api/Login",
      USER_REGISTRATION_URL: "http://localhost:3000/api/Register",
      NEWPOST_URL: "http://localhost:3000/api/post",
      GETDATA_BY_ID_URL: "http://localhost:3000/api/Getpost/post",
      DELETE_POST_URL: "http://localhost:3000/api/deletepost",
      ADMIN_LOGIN_URL: "http://localhost:3000/api/Admin/login",
      ADD_ADMIN_URL: "http://localhost:3000/api/Admin/register"
    },
  };
  
  export default nextConfig;