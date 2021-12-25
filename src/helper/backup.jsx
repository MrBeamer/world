/// maybe delete
// const { apiData, isLoading, serverError } = useFetch(
//   query === ""
//     ? "https://restcountries.com/v3.1/all"
//     : `https://restcountries.com/v3.1/name/${query}`
// );

//get all countries or searched country

// useEffect(() => {
//   setCountries((prevCountries) => {
//     return query === ""
//       ? { ...prevCountries, all: apiData }
//       : { ...prevCountries, searched: apiData };
//   });
// }, [apiData, query]);

//gets searched country from the searchfield
// function handleQueryChange(event) {
//   const input = event.target.value;
//   input.length > 0 ? setQuery(input) : setQuery("");
//   setCountries({ ...countries, searched: [] });
// }
