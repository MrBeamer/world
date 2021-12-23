import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./helper/ThemeContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar, Button } from "./components";
import { Header } from "./containers";
import "./App.css";

function App() {
  const [countries, setCountries] = useState({
    all: [],
    filtered: [],
    searched: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();

  console.log("Is loading: " + isLoading);
  const context = useContext(ThemeContext);
  console.log(context);

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
        <Route path="/" element={<HomeView countries={countries} />} />
        <Route
          path="/:country"
          element={<DetailView countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
