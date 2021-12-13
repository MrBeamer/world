import React from "react";
import { Card } from "../../components";
import "./cards.css";

export default function Cards(props) {
  const { theme } = props;
  return (
    <div className="cards">
      <Card theme={theme}></Card>
    </div>
  );
}
