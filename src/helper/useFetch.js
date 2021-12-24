import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [apiData, setApiData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState("");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) setApiData(data);
      } catch (error) {
        setServerError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { apiData, isLoading, serverError };
}

// function get(url) {
//   return new Promise((resolve, reject) => {
//     setIsLoading(true);
//     console.log(baseUrl + url);
//     fetch(baseUrl + url)
//       .then((response) => response.json())
//       .then((data) => {
//         if (!data) {
//           return reject(data);
//         }
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//         setServerError(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   });
// }
