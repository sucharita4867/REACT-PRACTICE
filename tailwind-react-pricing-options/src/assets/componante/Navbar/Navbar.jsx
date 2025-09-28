import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const navItems = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <nav className="flex justify-between mx-5 mt-6">
      <span onClick={() => setOpen(!open)} className="flex gap-4">
        {open ? (
          <X className="md:hidden "></X>
        ) : (
          <Menu className="md:hidden "></Menu>
        )}
        <ul
          className={`md:hidden bg-amber-100 absolute duration-1000
            ${open ? "top-8" : "-top-40"}
            `}
        >
          {links}
        </ul>
        <h1>My Navber</h1>
      </span>
      <ul className="md:flex hidden">{links}</ul>

      {/* <ul className="flex ">
        {navItems.map((route) => (
          <li className="ml-6">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}
      <button>Sine In</button>
    </nav>
  );
};

export default Navbar;
