import React from "react";
import "./searchField.css";

export default function Searchfield(props) {
  const { theme, onQueryChange, query } = props;
  return (
    <input
      className={`search-field ${theme}`}
      type="search"
      id="search"
      name="query"
      onChange={onQueryChange}
      value={query}
      placeholder="Search for a country..."
    />
  );
}
