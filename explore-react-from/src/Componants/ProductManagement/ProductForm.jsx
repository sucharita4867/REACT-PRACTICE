import React, { useState } from "react";

const ProductForm = ({ handleProduct }) => {
  //   console.log(handleProduct);
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    //     console.log(name, price, quantity);
    if (name.length === 0) {
      setError("please Provide a product name");
      return;
    } else if (price.length === 0) {
      setError("Please provide a price");
      return;
    } else if (price < 0) {
      setError("price can not be negative");
      return;
    } else setError("");
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
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
