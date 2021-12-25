import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

export default function Card(props) {
  const { theme, country } = props;
  const countryName = country.name.common;
  const [capital] = country.capital ? country.capital : "No Capital";
  const population = new Intl.NumberFormat("en-GB").format(country.population);
  const countrySlug = countryName.split(" ").join("-").toLowerCase();

  return (
    <div className={`card ${theme}`}>
      <Link to={`/${countrySlug}`}>
        <img
          className="card__image"
          src={country.flags.png}
          alt={`${countryName} flag`}
        ></img>
      </Link>
      <div className="card__content">
        <h2 className="card__title">{country.name.common}</h2>
        <p className="card__info">
          Population: <span>{population}</span>
        </p>
        <p className="card__info">
          Region: <span>{country.region}</span>
        </p>
        <p className="card__info">
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}
