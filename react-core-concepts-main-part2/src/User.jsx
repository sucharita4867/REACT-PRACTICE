import { use } from "react";

export default function User({ fetchUsers }) {
  const user = use(fetchUsers);
  console.log(user);
  return (
    <div className="card">
      <h3>user:{user.length}</h3>
      <h3>user:{user.name}</h3>
      <h3>user:{user.email}</h3>
    </div>
  );
}
