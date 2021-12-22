import React from "react";
import { DetailCard } from "../components";

export default function DetailView(props) {
  const { theme, countries } = props;
  return (
    <main className={`main ${theme}`}>
      <DetailCard countries={countries} theme={theme} />
    </main>
  );
}
