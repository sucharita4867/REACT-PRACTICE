import React, { useState } from "react";

const ProductForm = ({ handleProduct }) => {
  //   console.log(handleProduct);
  const handleProductSubmit = (e) => {
    const [error, setError] = useState("");
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    //     console.log(name, price, quantity);
    if (name.length === 0) {
      setError("please ");
    }
    const newProduct = {
      name,
      price,
      quantity,
    };
    handleProduct(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" id="" placeholder="name" />
        <br />
        <input type="text" name="price" id="" placeholder="price" />
        <br />
        <input type="text" name="quantity" id="" placeholder="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
