import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, DetailView } from "./views";
import { Navbar } from "./components";
import { Header } from "./containers";

import "./App.css";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

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
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomeView isDarkModeActive={isDarkModeActive} />}
          />
          <Route path="/:country" element={<DetailView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
