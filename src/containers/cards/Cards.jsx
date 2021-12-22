import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries } = props;
  const [renderCountries, setRenderCountries] = useState([]);

  useEffect(() => {
    if (
      countries.searched.length !== 0 &&
      countries.searched.length < 20 &&
      countries.filtered.length === 0
    ) {
      setRenderCountries(countries.searched);
    } else if (
      countries.filtered.length >= 1
      // countries.searched.length > 2
    ) {
      setRenderCountries(countries.filtered);
    } else {
      setRenderCountries(countries.all);
    }
  }, [countries]);
  console.log(renderCountries);
  // const renderCountries = () => {
  //   if (
  //     countries.searched.length !== 0 &&
  //     countries.searched.length < 20 &&
  //     countries.filtered.length === 0
  //   ) {
  //     return countries.searched;
  //   } else if (
  //     countries.filtered.length >= 1 ||
  //     countries.searched.length > 2
  //   ) {
  //     return countries.filtered;
  //   } else {
  //     return countries.all;
  //   }
  // };

  console.log(renderCountries?.length);

  return (
    renderCountries && (
      <div className="cards">
        {renderCountries.map((country, index) => {
          return <Card key={index} theme={theme} country={country}></Card>;
        })}
      </div>
    )
  );
}
