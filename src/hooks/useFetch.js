import React, { useEffect, useState } from "react";

import "../data/data.json"


function useFetch() {
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("resoponse",response);
        return response.json();
      })
      .then(function (myJson) {
        console.log("myJson",myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return {  };
}

export default useFetch;
