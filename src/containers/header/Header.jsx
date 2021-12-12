import React from "react";
import { Switch } from "../../components";
import "./header.css";

export default function Header(props) {
  const { onDarkModeClick, isDarkModeActive } = props;

  // const classNames = clsx({
  //   light: probs.theme === "light",
  //   dark: probs.theme === "dark",
  //   header: true,
  // });
  const theme = isDarkModeActive ? "header--dark " : "header--light ";
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
