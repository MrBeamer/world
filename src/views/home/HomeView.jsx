import React from "react";
import { Cards } from "../../containers";
import "./homeView.css";

export default function HomeView(props) {
  const { theme, countries, filteredCountries, searchedCountry } = props;

  return (
    <main className={`home-view main ${theme}`}>
      <Cards
        theme={theme}
        countries={countries}
        filteredCountries={filteredCountries}
        searchedCountry={searchedCountry}
      />
    </main>
  );
}
