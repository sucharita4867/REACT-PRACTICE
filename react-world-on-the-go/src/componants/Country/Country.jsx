import React from "react";
import "./country.css";

const Country = ({ country }) => {
  // console.log(country.population.population);

  const handelVisited = () => {
    console.log("btn clicked");
  };
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <h3>Population: {country.population.population} </h3>
      <h4>Continents: {country.continents.continents}</h4>
      <h5>
        Area:{country.area.area}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}{" "}
      </h5>
      <button onClick={handelVisited}>Not Visited</button>
    </div>
  );
};

export default Country;
