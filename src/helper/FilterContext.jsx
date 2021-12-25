import { useState, createContext } from "react";

const FilterContext = createContext();

export default function FilterProvider(props) {
  const [query, setQuery] = useState("");
  const [filterParam, setFilterParam] = useState("All");

  //get searched country from the searchfield
  function queryChange(event) {
    const input = event.target.value;
    input.length > 0 ? setQuery(input) : setQuery("");
  }

  //get selected region from dropdown
  function filterChange(event) {
    const region = event.target.value;
    setFilterParam(region);
  }

  return (
    <FilterContext.Provider
      value={{ query, filterParam, queryChange, filterChange }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };
