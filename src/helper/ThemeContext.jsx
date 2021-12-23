import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  function handleDarkModeClick() {
    setIsDarkModeActive((prevState) => !prevState);
  }

  const theme = isDarkModeActive ? "dark" : "light";

  return (
    <ThemeContext.Provider
      value={{ theme, onDarkModeClick: handleDarkModeClick }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
