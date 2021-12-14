import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Header } from "./containers";

import "./App.css";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [countries, setCountries] = useState([]);
  const theme = isDarkModeActive ? "dark" : "light";

  function handleDarModeClick() {
    setIsDarkModeActive((prevState) => !prevState);
    console.log("clicked");
  }

  useEffect(() => {
    (async () => {
      // we can use await here
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data.slice(0, 8));
    })();
  }, []);
  console.log(countries);

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          onDarkModeClick={handleDarModeClick}
          isDarkModeActive={isDarkModeActive}
          theme={theme}
        />
        <Navbar theme={theme} />
        <Routes>
          <Route
            path="/"
            element={<HomeView theme={theme} countries={countries} />}
          />
          <Route path="/:country" element={<DetailView theme={theme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
