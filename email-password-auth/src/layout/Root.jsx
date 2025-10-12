import React from "react";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
