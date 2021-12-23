import React, { useContext } from "react";
import { ThemeContext } from "../helper/ThemeContext";
import { Cards } from "../containers";

export default function HomeView({ countries }) {
  const context = useContext(ThemeContext);

  return (
    <main className={`main ${context.theme}`}>
      <Cards theme={context.theme} countries={countries} />
    </main>
  );
}
