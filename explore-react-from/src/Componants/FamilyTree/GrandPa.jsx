import React from "react";
import Unkle from "./Unkle";
import Dad from "./Dad";
import Aunt from "./Aunt";

const GrandPa = ({ asset }) => {
  return (
    <div className="">
      <h3>Grand Pa</h3>
      <section className="flex">
        <Dad asset={asset}></Dad>
        <Unkle></Unkle>
        <Aunt asset={asset}></Aunt>
      </section>
    </div>
  );
};

export default GrandPa;
