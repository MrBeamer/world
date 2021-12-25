import React from "react";
import { useParams } from "react-router-dom";
import "./detailCard.css";

export default function DetailCard(props) {
  const { countries, theme } = props;
  const { country } = useParams();

  const trimmedCountry = country.replace(/-/g, " ");
  const foundCountry = countries.find(
    (country) => country.name.common.toLowerCase() === trimmedCountry
  );

  if (foundCountry === undefined)
    return (
      <div className={`lds-ring ${theme}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return (
    <div className="detail-card">
      <img
        className="detail-card__image"
        src={foundCountry.flags.png}
        alt={`${foundCountry.name.common} flag`}
      ></img>
      <div className="detail-card__content">
        <h2 className="detail-card__title">{foundCountry.name.common}</h2>
        <div className="detail-card__content-block--1">
          <p className="detail-card__text-element">
            Native Name:{" "}
            <span>{Object.values(foundCountry.name.nativeName)[0].common}</span>
          </p>
          <p className="detail-card__text-element">
            Population:{" "}
            <span>
              {new Intl.NumberFormat("en-GB").format(foundCountry.population)}
            </span>
          </p>
          <p className="detail-card__text-element">
            Region: <span>{foundCountry.region}</span>
          </p>
          <p className="detail-card__text-element">
            Sub Region: <span>{foundCountry.subregion}</span>
          </p>
          <p className="detail-card__text-element">
            Capital: <span>{foundCountry.capital}</span>
          </p>
        </div>
        <div className="detail-card__content-block--2">
          <p className="detail-card__text-element">
            Top Level Domain: <span>{foundCountry.tld[0]}</span>
          </p>
          <p className="detail-card__text-element">
            Currencies:{" "}
            <span>
              {foundCountry.currencies
                ? Object.values(foundCountry.currencies)[0]
                    ?.name.split(" ")
                    .join(", ")
                : "No own currency"}
            </span>
          </p>
          <p className="detail-card__text-element">
            Languages:
            {<span> {Object.values(foundCountry.languages).join(", ")}</span>}
          </p>
        </div>
        <div className="detail-card__sub-content">
          <p className="detail-card__text-element">Border Countries:</p>
          <div className="detail-card__borders">
            {foundCountry.borders ? (
              foundCountry.borders.map((country, index) => {
                return (
                  <span
                    key={index}
                    className={`detail-card__border-item ${theme}`}
                  >
                    {country}
                  </span>
                );
              })
            ) : (
              <span className="detail-card__border-item"> None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
