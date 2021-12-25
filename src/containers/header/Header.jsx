import React, { useContext } from "react";
import { ThemeContext } from "../../helper/ThemeContext";
import { Switch } from "../../components";
import "./header.css";

export default function Header() {
  const context = useContext(ThemeContext);

  return (
    <header className={`header ${context.theme}`}>
      <div className="header__wrapper">
        <i class="fas fa-fire header__logo"></i>
        <h1 className="header__title">Flag Finder</h1>
      </div>
      <Switch />
    </header>
  );
}
