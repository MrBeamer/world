import React from "react";
import "./searchField.css";

export default function Searchfield(props) {
  const { theme, onQueryChange, query } = props;
  return (
    <div className="search-field__wrapper">
      <input
        className={`search-field ${theme}`}
        type="search"
        id="search"
        name="query"
        onChange={onQueryChange}
        value={query}
        placeholder="Search for a country..."
      />
      <i className="fas fa-search search-field__icon"></i>
    </div>
  );
}
