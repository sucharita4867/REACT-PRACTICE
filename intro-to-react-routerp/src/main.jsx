import { StrictMode } from "react";
// import { Outlet } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./Componants/Root/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Componants/Home/Home.jsx";
import Mobiles from "./Componants/Mobiles/Mobiles.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Mobiles", Component: Mobiles },
    ],
  },
  {
    path: "/about",
    element: <h1>welcome to about section</h1>,
  },
  {
    path: "/blog",
    element: <h1>this is blog page</h1>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "/app2",
    element: <App></App>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>,
  </StrictMode>
);
