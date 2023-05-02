import { useEffect, useState } from "react";

import { Diaporama, GreyBlock, Thumb, Loader } from "../../components";
import useFetch from "../../hooks/useFetchAsync";
import { urlSettings } from "../../routes/settings";

import mountain from "../../assets/images/backgroundMountains.png";

function Home() {
  const { server, port, dataUrl } = urlSettings;
  const currentData = useFetch(`${server}:${port}/${dataUrl}`);
  const { data } = currentData;
console.log("data", data)
  return (
    <article className="home">
      <Diaporama imgUrl={mountain} alt="mountain" text="Chez vous, partout et ailleurs"/>
      <GreyBlock>
        {data.map((item, index) => {
          return (
            <Thumb
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
