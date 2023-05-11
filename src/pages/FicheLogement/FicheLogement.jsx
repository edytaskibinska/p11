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

import { useParams } from "react-router-dom";

import "./FicheLogement.scss";
import Page404 from "../Page404/Page404";

function FicheLogement() {
  // const { server, port, dataUrl } = urlSettings;
  let { userId } = useParams();
  const { server, port, dataUrl } = urlSettings;
  const currentData = useFetch(`${server}:${port}/${dataUrl}`);
  const { data } = currentData;

  const rentalData = data.find((rental) => {
    return rental.id === userId;
  });

  console.log("rentalData", rentalData);

  return rentalData ? (
    <article className="ficheLogement">
      <Gallery slides={rentalData.pictures} />
      <Block cols3to2>
        <Block>
          <Title>{rentalData.title}</Title>
          <Subtitle>{rentalData.location}</Subtitle>
          {rentalData.tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </Block>
        <Block special>
          <Author
            surname={rentalData.host.name}
            name={rentalData.host.name.substring(0)}
            photo={rentalData.host.picture}
          />
          <RatingStars isRated={rentalData.rating} />
        </Block>
      </Block>
      <Block twoCols>
        <Dropdown dropTitle="Respect" dropContent={rentalData.description} />
        <Dropdown
          dropTitle="Equipement"
          dropContent="lipsum"
          isList
          list={rentalData.equipments}
        />
      </Block>
    </article>
  ) : (
    <Page404 />
  );
}

export default FicheLogement;
