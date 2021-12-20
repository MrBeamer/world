import React from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries, filteredCountries } = props;

  if (filteredCountries.length >= 1)
    return (
      <div className="cards">
        {filteredCountries.map((country, index) => {
          return <Card key={index} theme={theme} country={country}></Card>;
        })}
      </div>
    );

  return (
    countries.length >= 1 && (
      <div className="cards">
        {countries.map((country, index) => {
          return <Card key={index} theme={theme} country={country}></Card>;
        })}
      </div>
    )
  );
}
