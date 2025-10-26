import React from "react";
import logo from "../../assets/firebase-logo.png";
import MyContainer from "../MyContainer";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="bg-slate-100 py-2 border-b border-b-slate-300">
      <MyContainer className={"flex items-center justify-between"}>
        <figure>
          <img className="w-[55px]" src={logo} alt="" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? "text-purple-500 underline" : ""
              }
            >
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-purple-500 underline" : ""
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold ">
          <Link to="/login">Sign In</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
