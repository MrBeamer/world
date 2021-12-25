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
        setApiData([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { apiData, isLoading, serverError };
}
