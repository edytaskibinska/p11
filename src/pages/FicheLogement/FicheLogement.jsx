import { Diaporama, GreyBlock, Thumb, Loader } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";

import "./FicheLogement.css";

function FicheLogement({ id }) {
  const currentData = useFetch("./data.json");
  const { data } = currentData;
  console.log("data", data);

  const tempList = data[0]?.equipments;
  const tempDesc = data[0]?.description;
  console.log("tempList", tempList);
  console.log("tempDesc", tempDesc);

  return (
    <article className="ficheLogement">
      <Diaporama imgUrl={mountain} alt="mountain" />
      FicheLogement
    </article>
  );
}

export default FicheLogement;
