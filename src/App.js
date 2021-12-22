import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Button } from "./components";
import { Header } from "./containers";

import "./App.css";

function App() {
  const [countries, setCountries] = useState({
    all: [],
    filtered: [],
    searched: [],
  });
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const theme = isDarkModeActive ? "dark" : "light";
  const location = useLocation();

  function handleDarModeClick() {
    setIsDarkModeActive((prevState) => !prevState);
  }

  console.log("Is loading: " + isLoading);

  //gets searched country from the searchfield
  function handleQueryChange(event) {
    const input = event.target.value;
    input.length > 0 ? setQuery(input) : setQuery("");
    setCountries({ ...countries, searched: [] });
  }

  //filter country by name
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

  //display all countries
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        if (data)
          setCountries((prevCountries) => {
            return { ...prevCountries, all: data };
          });
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
      if (query)
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${query}`
          );
          if (!response.ok) {
            throw new Error(`${response.status} country not found.`);
          } else {
            const data = await response.json();
            if (data)
              setCountries((prevCountries) => {
                return { ...prevCountries, searched: data };
              });
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
    })();
  }, [query]);

  // toggle dark mode
  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkModeActive === false) {
      body.className = "light";
    } else {
      body.className = "dark";
    }
  }, [isDarkModeActive]);

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
          element={<HomeView theme={theme} countries={countries} />}
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
