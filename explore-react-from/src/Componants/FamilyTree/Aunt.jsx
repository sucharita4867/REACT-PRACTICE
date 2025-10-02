import React from "react";
import Cousin from "./Cousin";

const Aunt = ({ asset }) => {
  return (
    <div>
      <h3>Anut</h3>
      <section className="flex">
        <Cousin name="Riye"></Cousin>
        <Cousin asset={asset} name="Rupa"></Cousin>
        <Cousin name="pinki"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
