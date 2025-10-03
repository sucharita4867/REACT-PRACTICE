import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { name, email, phone, id } = user;
  return (
    <div className="border border-red-300 rounded-lg space-y-2 gap-4 p-8 m-10">
      <h2 className="text-2xl">{name}</h2>
      <h3 className="text-lg">{email}</h3>
      <h3 className="text-lg">{id}</h3>
      <h3 className="text-lg">{phone}</h3>
      <Link to={`/user/${id}`}>Show Details </Link>
    </div>
  );
};

export default User;
