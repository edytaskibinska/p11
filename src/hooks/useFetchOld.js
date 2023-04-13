import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      //const response = await MyAPI.getData(someId);
      // ...
      setLoading(true)
      const response = await fetch(url);
      setData(response)
      console.log("data", data);
      console.log("loading", loading);
    }
    fetchData();
  }, [url, data, loading]); // Or [] if effect doesn't need props or state
  
  return {data, loading, error}
}

export default useFetch;
