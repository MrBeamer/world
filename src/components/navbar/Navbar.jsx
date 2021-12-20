import React, { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbar(props) {
  const { theme, onQueryChange, query } = props;
  // const [isLoading, setIsLoading] = useState(false);
  // const [searchedCountry, setSearchedCountry] = useState({});

  return (
    <nav className={`nav ${theme}`}>
      <input
        className={`nav__search ${theme}`}
        type="search"
        id="search"
        name="query"
        onChange={onQueryChange}
        value={query}
        placeholder="Search for a country..."
        // defaultValue={query}
      />
      <select
        id="continent"
        name="continent"
        className={`nav__select ${theme}`}
        defaultValue="Filter by Region"
      >
        <option value="Filter by Region" disabled hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </nav>
  );
}
