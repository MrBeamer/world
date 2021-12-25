import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./helper/ThemeContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar, Button } from "./components";
import { Header } from "./containers";
import useFetch from "./helper/useFetch";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const context = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const [filterParam, setFilterParam] = useState("All");
  const location = useLocation();

  const { apiData, isLoading, serverError } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  //get all countries
  useEffect(() => {
    setCountries(apiData);
  }, [apiData]);

  //get searched country from the searchfield
  function handleQueryChange(event) {
    const input = event.target.value;
    input.length > 0 ? setQuery(input) : setQuery("");
  }

  //get selected region from dropdown
  function handleFilterChange(event) {
    const region = event.target.value;
    setFilterParam(region);
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
          element={
            <HomeView
              countries={countries}
              isLoading={isLoading}
              serverError={serverError}
              query={query}
              filterParam={filterParam}
            />
          }
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
