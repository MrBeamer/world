import { useState } from "react";

export default function useCountries() {
  const [countries, setCountries] = useState({
    all: [],
    filtered: [],
    searched: [],
  });
}
