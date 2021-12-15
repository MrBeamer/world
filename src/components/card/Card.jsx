import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

export default function Card(props) {
  const { theme, country } = props;
  console.log(country);
  const countryName = country.name.common;
  const [capital] = country.capital;
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
        <h2>{countryName}</h2>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}
