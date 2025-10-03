import React, { use } from "react";
import User from "../User/User";
const Users2 = ({ userPromise }) => {
  const users = use(userPromise);
  console.log("user Data load", users);
  return (
    <div>
      <h3>This is user 2</h3>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users2;
