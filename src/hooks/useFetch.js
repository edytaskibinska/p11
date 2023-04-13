import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchJson = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        if (data) {
          setIsLoaded(true);
        }
      });
      //>TODO!!!
    //   .catch((error) => {
    //    const errMessage = `ERROR : ${error.message}`;

    //     console.log("error",error);
    //     console.log("error.message",error.message);
    //     setErrorMessage(errMessage);
    //     console.error(error.message);
    //   });
  };

  useEffect(() => {
    fetchJson();
  }, [url]);
  return { data, isLoaded, errorMessage };
};

export default useFetch;
