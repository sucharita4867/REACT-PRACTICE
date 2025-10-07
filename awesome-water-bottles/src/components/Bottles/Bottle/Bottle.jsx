import React from "react";
import "./bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, stock } = bottle;
  // console.log(bottle);

  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h3>Bottle: {name}</h3>
      <h4>${price}</h4>
      <h4>Available:{stock}</h4>
      <h4>{stock} remaining</h4>
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
