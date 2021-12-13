import React from "react";
import "./navbar.css";

export default function Navbar(props) {
  const { theme } = props;
  return (
    <nav className={`nav ${theme}`}>
      <input
        className={`nav__search ${theme}`}
        type="search"
        id="search"
        name="query"
        placeholder="Search for a country..."
      />
      <select className={`nav__select ${theme}`}>
        <option value="" disabled selected hidden>
          Filter by Region
        </option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </nav>
  );
}

//finish the input and the options
