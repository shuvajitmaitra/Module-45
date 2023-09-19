import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contacts from "./components/Contacts/Contacts";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./Posts/Posts";

import PostDetails from "./components/PostDetails/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:UserId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
