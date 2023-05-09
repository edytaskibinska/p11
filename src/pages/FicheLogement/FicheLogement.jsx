import {
  Diaporama,
  GreyBlock,
  Thumb,
  Loader,
  Author,
  Block,
  Dropdown,
  Gallery,
  RatingStars,
  Subtitle,
  Tag,
  Title,
} from "../../components";
import useFetch from "../../hooks/useFetchAsync";
import { urlSettings } from "../../routes/settings";

import mountain from "../../assets/images/backgroundMountains.png";
import { useParams } from "react-router-dom";

import "./FicheLogement.scss";

//test without fetch data
const slides = [
  {
    url: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg",
    title: "beach",
  },
  {
    url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
    title: "boat",
  },
  {
    url: "https://assets.architecturaldesigns.com/plan_assets/341202070/large/420028WNT_Render_1660597652.jpg",
    title: "forest",
  },
];

const tags = ["cosy", "canal", "Paris 10"];

function FicheLogement() {
  // const { server, port, dataUrl } = urlSettings;
  // let { userId, id } = useParams();
  // const currentData = useFetch(`${server}:${port}/${userId}/ficheLogement/data.json`);
  // console.log("FL url", `${server}:${port}/ficheLogement/data.json`)
  // console.log("FL currentData", currentData)
  // //TODO : find error - mail de Tonny

  // const { data } = currentData;

  // //HELP ici les data ne se chargent pas puisque l'app ne se reload pas
  // console.log("DATA", data);
  const currentData = useFetch("./data.json");
  const { data } = currentData;
  const tempList = data[0]?.equipments;
  const tempDesc = data[0]?.description;
  return (
    <>
      {/* <article className="ficheLogement">
            FicheLogement dynamic  */}

      {/* FicheLogement ${userId} */}
      {/* {data.find(rental => {
         console.log("userId", userId);
         console.log("rental.id", rental.id);
        return rental.id === userId &&  <Diaporama imgUrl={mountain} alt="mountain" /> 
      })} */}
      {/* {!currentData.isLoaded && <Loader />} */}
      {/* </article> */}
      <article className="ficheLogement">
        <Gallery slides={slides} />
        <Block twoCols>
          <Block>
            <Title>Cozy loft on the Canal Saint-Martin</Title>
            <Subtitle>Paris, Île-de-France</Subtitle>
            {tags.map((tag) => {
              return <Tag>{tag}</Tag>;
            })}
          </Block>
          <Block special>
            <Author
              surname="Jean-pierre"
              name="Bonbon"
              photo="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg"
            />
            <RatingStars />
          </Block>
        </Block>
        <Block twoCols>
          <Dropdown dropTitle="Respect" dropContent={tempDesc} />
          <Dropdown
            dropTitle="Equipement"
            dropContent="lipsum"
            isList
            list={tempList}
          />
        </Block>
      </article>
    </>
  );
}

export default FicheLogement;
