import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Header } from "./containers";

import "./App.css";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const theme = isDarkModeActive ? "dark" : "light";

  function handleDarModeClick() {
    setIsDarkModeActive((prevState) => !prevState);
    console.log("clicked");
  }

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
          <Route path="/" element={<HomeView theme={theme} />} />
          <Route path="/:country" element={<DetailView theme={theme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
