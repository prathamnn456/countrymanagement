import React from "react";
import CityList from "./CityList";

const StateList = ({ countries, countryIndex, setCountries }) => {
  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name: stateName, cities: [] });
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      <button onClick={addState}>Add State</button>
      {countries[countryIndex].states.map((state, stateIndex) => (
        <div key={stateIndex}>
          <h3>{state.name}</h3>
          <button onClick={() => deleteState(stateIndex)}>Delete</button>
          <CityList countries={countries} countryIndex={countryIndex} stateIndex={stateIndex} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default StateList;
