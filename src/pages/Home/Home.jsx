import { Diaporama, GreyBlock, Thumb } from "../../components";
//import backgroundMountains from '../../assets/images'
import useFetch from "../../hooks/useFetchAsync";

function Home({}) {
  const currentData = useFetch("./data.json");
  const { data } = currentData;

  return (
    <div className="home">
      <Diaporama
        imgUrl="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="mountain"
      />
      <GreyBlock>
        {data.map((item, index) => {
          return (
            <Thumb
              id={item.id}
              text={item.title}
              key={index}
              imgUrl={item.cover}
              alt
            />
          );
        })}
      </GreyBlock>
    </div>
  );
}

export default Home;
