import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./bottles.css";
import {
  addToStoredCart,
  getStoredCart,
  removeFromCart,
} from "../../utilites/lokalstorage";
import Cart from "../cart/cart";
const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  // useEffect
  useEffect(() => {
    const storedCartId = getStoredCart();
    // console.log(storedCartId, bottles);

    const storedCart = [];

    for (const id of storedCartId) {
      // console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log("btn clicked to bottle", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    // save the bottle id in the storage
    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // console.log("remove item in the cart", id);

    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };

  return (
    <div>
      <h3>Bottles:{bottles.length}</h3>
      <h5>Added to cart : {cart.length}</h5>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
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
