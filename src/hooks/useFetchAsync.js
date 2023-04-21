import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const jsonData = await response.json();
        setData(jsonData);
        if (data) {
          setIsLoaded(true);
        }
        console.log("data", data);
        console.log("isLoaded", isLoaded);
      } catch (error) {
        const errMessage = `ERROR : ${error}`;
        setErrorMessage(errMessage);
        console.error(errMessage);
      }

      return data;
    }

    fetchData();
  }, [url]);

  return { data, isLoaded, errorMessage };
}

export default useFetch;
