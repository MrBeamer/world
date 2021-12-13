import React from "react";
import { Switch } from "../../components";
import "./header.css";

export default function Header(props) {
  const { onDarkModeClick, isDarkModeActive, theme } = props;

  return (
    <header className={`header ${theme}`}>
      <h1 className="header__title">Where in the world?</h1>
      <Switch
        isDarkModeActive={isDarkModeActive}
        onDarkModeClick={onDarkModeClick}
      ></Switch>
    </header>
  );
}
