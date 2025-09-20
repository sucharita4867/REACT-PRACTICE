import React, { use } from "react";
import Bottle from "./Bottle/Bottle";
import "./bottles.css";
const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  //   console.log(bottles);
  return (
    <div>
      <h3>Bottles:{bottles.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
