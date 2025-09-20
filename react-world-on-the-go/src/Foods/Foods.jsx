import React, { useState } from "react";

const Foods = ({ foodsPromise }) => {
  const [foods, setFoods] = useState([]);
  console.log(foodsPromise);
  return (
    <div>
      <h3>In the Foods: {foods.foods.title}</h3>
    </div>
  );
};

export default Foods;
