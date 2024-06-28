import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Error from "./components/Error/Error";
import Layout from "./Layout";
import AuthContextProvider from "./contexts/authcontext/AuthContextProvider";
import Signup from "./api/UserAuth/Signup";
import Login from "./api/UserAuth/Login";
import ForgotPassword from "./api/UserAuth/ForgotPassword";
import Home from "./api/Home/Home";
import About from "./api/About/About";
import Blogs from "./api/Blogs/Blogs";
import BlogPost from "./components/BlogPost/BlogPost";
import Write from "./api/Write/Write";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/signup" element={<Signup />} />
      <Route index path="/login" element={<Login />} />
      <Route index path="/reset" element={<ForgotPassword />} />
      <Route path="/" element={<Layout />}>
        <Route index path="" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/blogs" element={<Blogs />} />
        <Route index path="/blogpost" element={<BlogPost />} />
        <Route index path="/write" element={<Write />} />
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
