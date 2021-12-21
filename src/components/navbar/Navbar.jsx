import React from "react";
import "./navbar.css";
import { Filter } from "../../components";

export default function Navbar(props) {
  const { theme, onQueryChange, query, onFilterChange } = props;
  // const [isLoading, setIsLoading] = useState(false);
  // const [searchedCountry, setSearchedCountry] = useState({});

  return (
    <nav className={`nav ${theme}`}>
      <input
        className={`nav__search ${theme}`}
        type="search"
        id="search"
        name="query"
        onChange={onQueryChange}
        value={query}
        placeholder="Search for a country..."
        // defaultValue={query}
      />
      <Filter theme={theme} onFilterChange={onFilterChange} />
    </nav>
  );
}
