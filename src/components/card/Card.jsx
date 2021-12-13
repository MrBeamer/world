import React from "react";
import "./card.css";

export default function Card(props) {
  const { theme } = props;
  return (
    <div className={`card ${theme}`}>
      <img className="card__image" src="" alt=""></img>
      <div className="card__content">
        <h2>Germany</h2>
        <p>
          Population: <span>81.0000</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </div>
    </div>
  );
}
