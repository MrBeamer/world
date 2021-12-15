import React from "react";
import { useParams } from "react-router-dom";
import "./detailCard.css";

export default function DetailCard(props) {
  const { countries } = props;
  const { country } = useParams();

  const trimmedCountry = country.replace(/-/g, " ");
  const foundCountry = countries.find(
    (country) => country.name.common.toLowerCase() === trimmedCountry
  );

  const countryName = foundCountry?.name.common;
  const nativeName = foundCountry?.name.nativeName.common;

  const population = new Intl.NumberFormat("en-GB").format(
    foundCountry?.population
  );
  const flagUrl = foundCountry?.flags.png;
  const region = foundCountry?.region;
  const subRegion = foundCountry?.subregion;
  const capital = foundCountry?.capital;
  const borderCountries = foundCountry?.borders;

  console.log(foundCountry);
  console.log(nativeName);

  console.log(Object.values(foundCountry?.languages));

  const languages = Object?.values(foundCountry?.languages);
  languages.map((language) => console.log(language));
  return (
    <div className="detail-card">
      <img
        className="detail-card__image"
        src={flagUrl}
        alt={`${countryName} flag`}
      ></img>
      <div className="detail-card__content">
        <h2 className="detail-card__title">{countryName}</h2>
        <div className="detail-card__content-block--1">
          <p className="detail-card__text-element">
            Native Name: <span>{nativeName}</span>
          </p>
          <p className="detail-card__text-element">
            Population: <span>{population}</span>
          </p>
          <p className="detail-card__text-element">
            Region: <span>{region}</span>
          </p>
          <p className="detail-card__text-element">
            Sub Region: <span>{subRegion}</span>
          </p>
          <p className="detail-card__text-element">
            Capital: <span>{capital}</span>
          </p>
        </div>
        <div className="detail-card__content-block--2">
          <p className="detail-card__text-element">
            Top Level Domain: <span>be</span>
          </p>
          <p className="detail-card__text-element">
            Currencies: <span>Euro</span>
          </p>
          <p className="detail-card__text-element">
            Languages:
            {languages.map((language, index) => (
              <span key={index}> {language}</span>
            ))}
          </p>
        </div>
        <div className="detail-card__sub-content">
          <p className="detail-card__text-element">Border Countries:</p>
          {borderCountries ? (
            borderCountries.map((country, index) => {
              return (
                <span key={index} className="detail-card__border-item">
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
  );
}
