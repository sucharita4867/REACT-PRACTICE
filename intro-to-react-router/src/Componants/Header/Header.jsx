import React from "react";
import { Link, NavLink, Outlet } from "react-router";
const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <nav>
        <NavLink className="mr-7" to="/">
          Home
        </NavLink>
        <NavLink className="mr-7" to="/iphone">
          iphone
        </NavLink>
        <NavLink className="mr-7" to="/laptops">
          laptops
        </NavLink>
        <NavLink className="mr-7" to="/Mobiles">
          Mobiles
        </NavLink>
        <NavLink className="mr-7" to="/Users">
          Users
        </NavLink>
        <NavLink className="mr-7" to="/Users2">
          Users2
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
