import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex gap-5">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
