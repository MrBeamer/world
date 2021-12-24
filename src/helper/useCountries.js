import { useState } from "react";

export default function useCountries() {
  const [countries, setCountries] = useState({
    all: [],
    filtered: [],
    searched: [],
  });
  const [query, setQuery] = useState("");

  //filter country by name
  function filterByRegion(event) {
    const region = event.target.value;
    let filteredByRegion = "";

    if (countries.searched.length > 1) {
      filteredByRegion = countries.searched.filter(
        (country) => country.region.toLowerCase() === region
      );
    } else {
      filteredByRegion = countries.all.filter(
        (country) => country.region.toLowerCase() === region
      );
    }

    setCountries({ ...countries, filtered: filteredByRegion });
  }

  //gets searched country from the searchfield
  function getQuery(event) {
    const input = event.target.value;
    input.length > 0 ? setQuery(input) : setQuery("");
    setCountries({ ...countries, searched: [] });
  }

  return { countries, query, filterByRegion, getQuery };
}
