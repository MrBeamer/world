import React, { useContext } from "react";
import { ThemeContext } from "../../helper/ThemeContext";
import { Switch } from "../../components";
import "./header.css";

export default function Header() {
  const context = useContext(ThemeContext);

  return (
    <header className={`header ${context.theme}`}>
      <h1 className="header__title">Where in the world?</h1>
      <Switch />
    </header>
  );
}
