import React, { useState } from "react";
import CountryList from "./components/CountryList";
import "./styles/App.css";


const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  const updateCountry = (index) => {
    const newName = prompt("Enter new country name:", countries[index].name);
    if (newName && window.confirm("Are you sure you want to update?")) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      const updatedCountries = countries.filter((_, i) => i !== index);
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      <h1>Country, State, and City Management</h1>
      <button onClick={addCountry}>Add Country</button>
      <CountryList
        countries={countries}
        updateCountry={updateCountry}
        deleteCountry={deleteCountry}
        setCountries={setCountries}
      />
    </div>
  );
};

export default App;
