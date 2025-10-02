import React from "react";
import Special from "./Special";

const myself = ({ asset }) => {
  return (
    <div>
      <h3>myself</h3>
      <Special asset={asset}></Special>
    </div>
  );
};

export default myself;
