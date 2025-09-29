import React, { use } from "react";

const Users2 = ({ userPromise }) => {
  const user = use(userPromise);
  console.log("user Data load", user);
  return (
    <div>
      <h3>This is user 2</h3>
    </div>
  );
};

export default Users2;
