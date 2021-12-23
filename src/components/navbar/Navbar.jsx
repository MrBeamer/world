import React, { useContext } from "react";
import { ThemeContext } from "../../helper/ThemeContext";
import "./navbar.css";
import { Filter } from "../../components";
import { Searchfield } from "../../components";

export default function Navbar(props) {
  const { onQueryChange, query, onFilterChange } = props;
  const context = useContext(ThemeContext);

  return (
    <nav className={`nav ${context.theme}`}>
      <Searchfield
        theme={context.theme}
        onQueryChange={onQueryChange}
        query={query}
      />
      <Filter theme={context.theme} onFilterChange={onFilterChange} />
    </nav>
  );
}
