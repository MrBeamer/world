import React from "react";
import { Cards } from "../containers";

export default function HomeView(props) {
  const { theme, countries } = props;

  return (
    <main className={`main ${theme}`}>
      <Cards theme={theme} countries={countries} />
    </main>
  );
}
