import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);
  const handleBtn = () => {
    setMoney(money + 5000);
  };
  return (
    <div>
      <h3>Anut</h3>
      <section className="flex">
        <Cousin name="Riye"></Cousin>
        <Cousin asset={asset} name="Rupa"></Cousin>
        
      </section>
      <button onClick={handleBtn}>Add 5000 tk</button>
    </div>
  );
};

export default Aunt;
