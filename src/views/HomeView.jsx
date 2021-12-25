import React, { useContext } from "react";
import { ThemeContext } from "../helper/ThemeContext";
import { Cards } from "../containers";

export default function HomeView({
  countries,
  isLoading,
  serverError,
  query,
  filterParam,
}) {
  const context = useContext(ThemeContext);

  if (serverError) {
    return <p>serverError</p>;
  }
  return (
    <main className={`main ${context.theme}`}>
      {isLoading ? (
        <div className={`lds-ring ${context.theme}`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Cards
          theme={context.theme}
          countries={countries}
          query={query}
          filterParam={filterParam}
        />
      )}
    </main>
  );
}
