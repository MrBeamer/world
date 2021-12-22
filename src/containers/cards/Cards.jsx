import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries } = props;
  const [renderCountries, setRenderCountries] = useState([]);

  useEffect(() => {
    if (countries.filtered.length >= 1) {
      setRenderCountries(countries.filtered);
    } else if (countries.searched.length !== 0) {
      setRenderCountries(countries.searched);
    } else {
      setRenderCountries(countries.all);
    }
  }, [countries]);

  console.log(renderCountries);

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
