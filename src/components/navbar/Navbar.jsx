import React from "react";
import "./navbar.css";
import { Filter } from "../../components";
import { Searchfield } from "../../components";

export default function Navbar(props) {
  const { theme, onQueryChange, query, onFilterChange } = props;

  return (
    <nav className={`nav ${theme}`}>
      <Searchfield theme={theme} onQueryChange={onQueryChange} query={query} />
      <Filter theme={theme} onFilterChange={onFilterChange} />
    </nav>
  );
}
