import { useEffect, useState } from "react";

import { Diaporama, GreyBlock, Thumb, Loader } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";

function Home() {
  const currentData = useFetch("./data.json");
  const { data } = currentData;

  return (
    <article className="home">
      <Diaporama imgUrl={mountain} alt="mountain" />
      <GreyBlock>
        {data.map((item, index) => {
          return (
            <Thumb
              //onClick={console.log("logement id")}
              id={item.id}
              text={item.title}
              key={index}
              imgUrl={item.cover}
            />
          );
        })}
      </GreyBlock>
      {!currentData.isLoaded && <Loader />}
    </article>
  );
}

export default Home;
