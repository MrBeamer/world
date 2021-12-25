import { useState } from "react";

export default function useQuery() {
  const [query, setQuery] = useState("");
  console.log(query);
  //gets searched country from the searchfield
  function getQuery(event) {
    const input = event.target.value;
    input.length > 0 ? setQuery(input) : setQuery("");
  }

  return { query, getQuery };
}
