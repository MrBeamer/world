import React, { useContext } from "react";
import { ThemeContext } from "../helper/ThemeContext";
import { DetailCard } from "../components";

export default function DetailView({ countries }) {
  const context = useContext(ThemeContext);

  return (
    <main className={`main detail-view ${context.theme}`}>
      <DetailCard countries={countries} theme={context.theme} />
    </main>
  );
}
