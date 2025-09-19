import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  console.log(handleVisitedCountries);
  // console.log(country.population.population);

  const handelVisited = () => {
    // basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // second system
    // setVisited(visited ? false : true);
    // third system
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && `country-visited`}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <h3>Population: {country.population.population} </h3>
      <h4>Continents: {country.continents.continents}</h4>
      <h5>
        Area:{country.area.area}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}{" "}
      </h5>
      <button onClick={handelVisited}>
        {visited ? "visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
