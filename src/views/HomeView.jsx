import React, { useContext } from "react";
import { ThemeContext } from "../helper/ThemeContext";
import Cards from "../components/cards/Cards";

export default function HomeView({ countries, isLoading, serverError }) {
  const context = useContext(ThemeContext);

  return (
    <main className={`main ${context.theme}`}>
      {serverError && <h2>{serverError}</h2>}
      {isLoading ? (
        <div className={`lds-ring ${context.theme}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Cards theme={context.theme} countries={countries} />
      )}
    </main>
  );
}
