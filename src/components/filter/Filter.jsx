import React from "react";
import "./filter.css";

export default function Filter({ theme, onFilterChange }) {
  return (
    <select
      onChange={onFilterChange}
      id="continent"
      name="continent"
      className={`filter__select ${theme}`}
      defaultValue="Filter by Region"
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
