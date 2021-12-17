import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Button } from "./components";
import { Header } from "./containers";

import "./App.css";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const theme = isDarkModeActive ? "dark" : "light";
  const location = useLocation();
  console.log(location.pathname);

  function handleDarModeClick() {
    setIsDarkModeActive((prevState) => !prevState);
    console.log("clicked");
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (isDarkModeActive === false) {
      body.className = "light";
    } else {
      body.className = "dark";
    }
  }, [isDarkModeActive]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        if (data) setCountries(data.slice(0, 8));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(countries);

  return (
    // <BrowserRouter>
    <div className="app">
      <Header
        onDarkModeClick={handleDarModeClick}
        isDarkModeActive={isDarkModeActive}
        theme={theme}
      />
      {location.pathname === "/" ? <Navbar theme={theme} /> : <Button></Button>}
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
    // </BrowserRouter>
  );
}

export default App;
