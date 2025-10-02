import React from "react";
import Special from "./Special";

const Cousin = ({ name, asset }) => {
  console.log(name);
  return (
    <div>
      <h3>{name}</h3>
      {
        // name=== " Riye" && <Special></Special>
        name === " Rupa" && <Special asset={asset}></Special>
      }
    </div>
  );
};

export default Cousin;
