import React from "react";
import "./card.css";

export default function Card(props) {
  const { theme, country } = props;
  console.log(country);
  const [capital] = country.capital;
  const population = new Intl.NumberFormat("en-GB").format(country.population);
  console.log(capital);

  return (
    <div className={`card ${theme}`}>
      <img className="card__image" src={country.flags.png} alt=""></img>
      <div className="card__content">
        <h2>{country.name.common}</h2>
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
