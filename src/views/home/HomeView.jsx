import React from "react";
import { Cards } from "../../containers";
import "./homeView.css";

export default function HomeView(props) {
  const { theme, countries, filteredCountries } = props;

  return (
    <main className={`home-view main ${theme}`}>
      <Cards
        theme={theme}
        countries={countries}
        filteredCountries={filteredCountries}
      />
    </main>
  );
}
