import { use } from "react";
import Firend from "./friend";
export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);

  return (
    <div className="card">
      <h3>Friends:{friends.length} </h3>
      {friends.map((friends) => (
        <Firend key={friends.id} friend={friends}></Firend>
      ))}
    </div>
  );
}
