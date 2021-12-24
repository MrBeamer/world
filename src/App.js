import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./helper/ThemeContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar, Button } from "./components";
import { Header } from "./containers";
import useFetch from "./helper/useFetch";
import "./App.css";

function App() {
  const [countries, setCountries] = useState({
    all: [],
    filtered: [],
    searched: [],
  });
  const context = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const location = useLocation();

  const { apiData, isLoading } = useFetch(
    query === ""
      ? "https://restcountries.com/v3.1/all"
      : `https://restcountries.com/v3.1/name/${query}`
  );

  //get all countries or searched country

  useEffect(() => {
    setCountries((prevCountries) => {
      return query === ""
        ? { ...prevCountries, all: apiData }
        : { ...prevCountries, searched: apiData };
    });
  }, [apiData, query]);

  console.log(countries);

  //gets searched country from the searchfield
  function handleQueryChange(event) {
    const input = event.target.value;
    input.length > 0 ? setQuery(input) : setQuery("");
    setCountries({ ...countries, searched: [] });
  }

  //filter country by region
  function handleFilterChange(event) {
    const region = event.target.value;
    let filteredByRegion = "";

    if (countries.searched.length > 1) {
      filteredByRegion = countries.searched.filter(
        (country) => country.region.toLowerCase() === region
      );
    } else {
      filteredByRegion = countries.all.filter(
        (country) => country.region.toLowerCase() === region
      );
    }

    setCountries({ ...countries, filtered: filteredByRegion });
  }

  return (
    <div className={`app ${context.theme}`}>
      <Header />
      {location.pathname === "/" ? (
        <Navbar
          onQueryChange={handleQueryChange}
          query={query}
          onFilterChange={handleFilterChange}
        />
      ) : (
        <Button />
      )}
      <Routes>
        <Route
          path="/"
          element={<HomeView countries={countries} isLoading={isLoading} />}
        />
        <Route
          path="/:country"
          element={<DetailView countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
