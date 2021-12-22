import { useEffect } from "react";

export default function useFetch(baseUrl) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        if (data) setCountries({ ...countries, all: data });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(countries);

  function get(url) {
    return new Promise((resolve, reject) => {
      setIsLoading(true);
      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            isLoading(false);
            return reject(data);
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          isLoading(false);
        });
    });
  }

  return { get, isLoading };
}
