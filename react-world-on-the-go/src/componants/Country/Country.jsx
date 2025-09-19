import React from "react";

const Country = ({ country }) => {
  console.log(country.population.population);
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <h3>Population: {country.population.population} </h3>
      <h4>Continents: {country.continents.continents}</h4>
    </div>
  );
};

export default Country;
