import { Diaporama, GreyBlock, Thumb, Loader } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";

function Home() {
  const currentData = useFetch("./data.json");
  const { data } = currentData;
  // console.log("data", data)

  const showFicheLogement = () => {
    //useCOntext
    console.log("onClick");
  };
  return (
    <article className="home">
      <Diaporama imgUrl={mountain} alt="mountain" />
      <GreyBlock>
        {data.map((item, index) => {
          return (
            <Thumb
              onClick={showFicheLogement}
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
