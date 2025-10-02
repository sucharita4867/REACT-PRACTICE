import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h3>{name}</h3>
      {
        // name=== " Riye" && <Special></Special>
        name === " Rupa" && <Special asset={asset}></Special>
      }
      {name === " Riya" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
