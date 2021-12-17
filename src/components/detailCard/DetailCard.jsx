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

  /// renders Loading as long foundCountry is undefined, so components below dont return undefined error

  // const countryData = {
  //   countryName: foundCountry.name.common,
  //   flagUrl: foundCountry.flags.png,
  //   region: foundCountry.region,
  //   subRegion: foundCountry.subregion,
  //   capital: foundCountry.capital,
  //   borderCountries: foundCountry.borders,
  //   currency: foundCountry.currency.name,
  //   tlDomain: foundCountry.tld,
  //   population: new Intl.NumberFormat("en-GB").format(foundCountry.population),
  // };

  // const countryName = foundCountry.name.common;
  // const nativeName = foundCountry.name.nativeName.common;

  // const population = new Intl.NumberFormat("en-GB").format(
  //   foundCountry.population
  // );
  // const flagUrl = foundCountry.flags.png;
  // const region = foundCountry.region;
  // const subRegion = foundCountry.subregion;
  // const capital = foundCountry.capital;
  // const borderCountries = foundCountry.borders;
  // const currency = foundCountry.currency.name;
  // const tlDomain = foundCountry.tld;

  console.log(foundCountry);
  if (foundCountry) console.log(Object.values(foundCountry.currencies)[0].name);
  if (foundCountry === undefined)
    // console.log(Object.values(foundCountry.name.nativeName)[0].common);

    // console.log(
    //   foundCountry.name.nativeName[foundCountry.fifa.toLowerCase()].common
    // );

    // console.log(Object.values(foundCountry.languages));

    // const languages = Object.values(foundCountry.languages);
    // languages.map((language) => console.log(language));

    // look movie api i have to call the api again but only get one country this fixes undefined and the depp nesting problem - to find the corresponding country use the name from the params
    return <h3>Loading</h3>;

  return (
    <div className="detail-card">
      <img
        className="detail-card__image"
        src={foundCountry.flags.png}
        alt={`${"countryName"} flag`}
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
            <span>{Object.values(foundCountry.currencies)[0].name}</span>
          </p>
          <p className="detail-card__text-element">
            Languages:
            {Object.values(foundCountry.languages).map((language, index) => (
              <span key={index}> {language}</span>
            ))}
          </p>
        </div>
        <div className="detail-card__sub-content">
          <p className="detail-card__text-element">Border Countries:</p>
          {foundCountry.borders ? (
            foundCountry.borders.map((country, index) => {
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
