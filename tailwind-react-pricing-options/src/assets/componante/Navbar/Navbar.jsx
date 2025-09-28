import React from "react";
import Link from "./Link";
const navItems = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
];
const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        {navItems.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>

      {/* <ul className="flex ">
        {navItems.map((route) => (
          <li className="ml-6">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Navbar;
