import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <div>Hello i am from Initial path</div> },
  {
    path: "/about",
    element: <div>Hello i am About page</div>,
  },
  {
    path: "/contact",
    element: <div>Hello i am from Contact page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
