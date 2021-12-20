import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Button } from "./components";
import { Header } from "./containers";

import "./App.css";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  //testin
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [query, setQuery] = useState("");
  const theme = isDarkModeActive ? "dark" : "light";
  const location = useLocation();
  console.log(location.pathname);

  function handleDarModeClick() {
    setIsDarkModeActive((prevState) => !prevState);
    console.log("clicked");
  }

  function handleQueryChange(event) {
    console.log(event.currentTarget.value);
    const input = event.target.value;
    if (input.length > 0) {
      setQuery(input);
    } else {
      setSearchedCountry(countries);
      setQuery("");
    }
    event.preventDefault();
  }

  //filter country by name
  function handleFilterChange(event) {
    console.log(event.currentTarget.value);
    const region = event.target.value;
    console.log(region);
    const filteredByRegion = countries.filter(
      (country) => country.region.toLowerCase() === region
    );
    setFilteredCountries(filteredByRegion);
  }

  // toggle dark mode
  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkModeActive === false) {
      body.className = "light";
    } else {
      body.className = "dark";
    }
  }, [isDarkModeActive]);

  //display all countries
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        if (data) setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(countries);

  //search for a country
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        );
        if (!response.ok) {
          throw new Error(`${response.status} country not found.`);
        } else {
          const data = await response.json();
          if (data) setSearchedCountry(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <div className="app">
      <Header
        onDarkModeClick={handleDarModeClick}
        isDarkModeActive={isDarkModeActive}
        theme={theme}
      />
      {location.pathname === "/" ? (
        <Navbar
          theme={theme}
          onQueryChange={handleQueryChange}
          query={query}
          onFilterChange={handleFilterChange}
        />
      ) : (
        <Button theme={theme}></Button>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomeView
              theme={theme}
              countries={countries}
              filteredCountries={filteredCountries}
              searchedCountry={searchedCountry}
            />
          }
        />
        <Route
          path="/:country"
          element={<DetailView theme={theme} countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
