import React, { use, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./bottles.css";
const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
    //     console.log("btn clicked to bottle", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h3>Bottles:{bottles.length}</h3>
      <h5>Added to cart : {cart.length}</h5>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
