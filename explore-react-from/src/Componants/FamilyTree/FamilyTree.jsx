import React, { createContext, useState } from "react";
import GrandPa from "./GrandPa";
import "./Family-tree.css";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = " diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <h3>Total Family Money : {money}</h3>
      {/* <AssetContext.Provider value={newAsset}>
        <GrandPa asset={asset}></GrandPa>
      </AssetContext.Provider> */}
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <GrandPa asset={asset}></GrandPa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
