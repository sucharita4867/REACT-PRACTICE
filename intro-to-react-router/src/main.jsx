import { StrictMode, Suspense } from "react";
// import { Outlet } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./Componants/Root/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Componants/Home/Home.jsx";
import Mobiles from "./Componants/Mobiles/Mobiles.jsx";
import Laptops from "./Componants/Laptops/Laptops.jsx";
import Iphones from "./Componants/Iphons/Iphones.jsx";
import Users from "./Componants/Users/Users.jsx";
import Users2 from "./Componants/Users2/Users2.jsx";
import UserDetails from "./Componants/UserDetails/UserDetails.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      { path: "iphone", Component: Iphones },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<p>Loading....</p>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:id",
        loader: ({ params }) => {
          console.log("params data", params);
          fetch(`https://jsonplaceholder.typicode.com/users`);
        },
        Component: UserDetails,
      },
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
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
