//
//1. to get something from local storage, you will get it as a string
// 2. convert this to javascript object/array

import js = require("@eslint/js");

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};
const savaCartToLocalStorage = cart =>{
      const cartStringified = JSON.stringify(cart)
      localStorage.setItem('cart',cartStringified)
}
const addItemsToCartLocalStorage = (id)=>{
      const cart = getCartFromLocalStorage()
      const newCart = [...cart,id]
      // save new cart to the local storage
      savaCartToLocalStorage(newCart)
}

export{getCartFromLocalStorage,addItemsToCartLocalStorage}