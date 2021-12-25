import React from "react";
import "./filter.css";

export default function Filter({ theme, onFilterChange }) {
  return (
    <div className="filter__wrapper">
      <select
        onChange={onFilterChange}
        id="continent"
        name="continent"
        className={`filter__select ${theme}`}
        defaultValue="Filter by Region"
        aria-label="filter continent"
      >
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <i class="fas fa-angle-down filter__icon"></i>
    </div>
  );
}
