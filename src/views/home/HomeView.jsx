import React from "react";
import { Cards } from "../../containers";
import "./homeView.css";

export default function HomeView(props) {
  const { theme } = props;

  return (
    <main className={`home-view ${theme}`}>
      <Cards theme={theme} />
    </main>
  );
}
