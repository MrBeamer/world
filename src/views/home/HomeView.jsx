import React from "react";
import "./homeView.css";

export default function HomeView(props) {
  const { isDarkModeActive } = props;
  const theme = isDarkModeActive ? "home-view--dark" : "home-view--light ";

  return <main className={`home-view ${theme}`}>HomeView</main>;
}
