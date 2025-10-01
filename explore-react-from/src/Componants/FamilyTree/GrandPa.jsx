import React from "react";
import Unkle from "./Unkle";
import Dad from "./Dad";
import Aunt from "./Aunt";

const GrandPa = () => {
  return (
    <div>
      <h3>Grand Pa</h3>
      <section>
        <Dad></Dad>
        <Unkle></Unkle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default GrandPa;
