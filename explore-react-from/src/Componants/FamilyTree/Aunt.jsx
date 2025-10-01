import React from "react";
import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div>
      <h3>Anut</h3>
      <section className="flex">
        <Cousin name="riye"></Cousin>
        <Cousin name="rupa"></Cousin>
        <Cousin name="pinki"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
