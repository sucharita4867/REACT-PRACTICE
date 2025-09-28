import React from "react";

const Link = ({ route }) => {
  return (
    <li className=" md:ml-6 ml-1 px-4 hover:bg-amber-500">
      <a href={route.path}> {route.name}</a>
    </li>
  );
};

export default Link;
