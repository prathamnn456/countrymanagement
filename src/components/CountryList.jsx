import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, updateCountry, deleteCountry, setCountries }) => {
  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h2>{country.name}</h2>
          <button onClick={() => updateCountry(index)}>Edit</button>
          <button onClick={() => deleteCountry(index)}>Delete</button>
          <StateList countries={countries} countryIndex={index} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
