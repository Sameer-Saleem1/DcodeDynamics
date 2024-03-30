import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/team",
  //   element: <Team />,
  // },
  // {
  //   path: "/services",
  //   element: <Services />,
  // },
  // {
  //   path: "/tech",
  //   element: <Technology />,
  // },
  // {
  //   path: "/order",
  //   element: <Order />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
