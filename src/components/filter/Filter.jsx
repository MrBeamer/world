import React, { useContext } from "react";
import { FilterContext } from "../../helper/FilterContext";
import "./filter.css";

export default function Filter({ theme }) {
  const context = useContext(FilterContext);

  return (
    <div className="filter__wrapper">
      <select
        onChange={context.filterChange}
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
      <i className="fas fa-angle-down filter__icon"></i>
    </div>
  );
}
