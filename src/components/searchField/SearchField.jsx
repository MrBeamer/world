import React, { useContext } from "react";
import { FilterContext } from "../../helper/FilterContext";
import "./searchField.css";

export default function Searchfield({ theme }) {
  const context = useContext(FilterContext);

  return (
    <div className="search-field__wrapper">
      <input
        className={`search-field ${theme}`}
        type="search"
        id="search"
        name="query"
        onChange={context.queryChange}
        value={context.query}
        placeholder="Search for a country..."
      />
      <i className="fas fa-search search-field__icon"></i>
    </div>
  );
}
