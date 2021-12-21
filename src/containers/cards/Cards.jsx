import React from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries, filteredCountries, searchedCountry } = props;
  console.log(countries);
  // const displayedCountries = function () {
  //   if (searchedCountry.length !== 0 && searchedCountry.length !== 250) {
  //     return searchedCountry;
  //   } else if (filteredCountries.length >= 1) {
  //     return filteredCountries;
  //   } else {
  //     return countries;
  //   }
  // };

  // console.log(displayedCountries());

  // return (
  //   displayedCountries.length >= 1 && (
  //     <div className="cards">
  //       {displayedCountries.map((country, index) => {
  //         return <Card key={index} theme={theme} country={country}></Card>;
  //       })}
  //     </div>
  //   )
  // );

  if (searchedCountry.length !== 0 && searchedCountry.length !== 250)
    return (
      <div className="cards">
        {searchedCountry.map((country, index) => {
          return <Card key={index} theme={theme} country={country}></Card>;
        })}
      </div>
    );

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
