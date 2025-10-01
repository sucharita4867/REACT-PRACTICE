import React from "react";
import Cousin from "./Cousin";

const Unkle = () => {
  return (
    <div>
      <h3>Unkle</h3>
      <section className="flex">
        <Cousin name="rupsa"></Cousin>
        <Cousin name="anu"></Cousin>
        <Cousin name="priya"></Cousin>
      </section>
    </div>
  );
};

export default Unkle;
