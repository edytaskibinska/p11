import { Diaporama, GreyBlock, Thumb, Loader } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";
import { Outlet , useParams} from "react-router-dom";

import "./FicheLogement.css";

function FicheLogement() {
  const currentData = useFetch("./data.json");
  const { data } = currentData;

  let { userId, id } = useParams();
  //const rentalData = datas.find((rental) => rental.id === id);

  return (
    <article className="ficheLogement">
      <Diaporama imgUrl={mountain} alt="mountain" />
      FicheLogement ${userId}
    </article>
  );
}

export default FicheLogement;
