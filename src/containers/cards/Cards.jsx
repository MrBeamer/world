import React from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme, countries } = props;

  return (
    <div className="cards">
      {countries.map((country, index) => {
        return <Card key={index} theme={theme} country={country}></Card>;
      })}
    </div>
  );
}
