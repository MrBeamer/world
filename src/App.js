import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./helper/ThemeContext";
import { Routes, Route } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Header } from "./containers";
import useFetch from "./helper/useFetch";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const context = useContext(ThemeContext);

  const { apiData, isLoading, serverError } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  //get all countries
  useEffect(() => {
    setCountries(apiData);
  }, [apiData]);

  return (
    <div className={`app ${context.theme}`}>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomeView
              countries={countries}
              isLoading={isLoading}
              serverError={serverError}
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
