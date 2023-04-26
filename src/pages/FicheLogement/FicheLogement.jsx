import { Diaporama, GreyBlock, Thumb, Loader } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";
import { useParams } from "react-router-dom";

import "./FicheLogement.css";

function FicheLogement() {
  const currentData = useFetch("./data.json");
  const { data } = currentData;
  //HELP ici les data ne se chargent pas puisque l'app ne se reload pas
  console.log("DATA", data);

  let { userId, id } = useParams();

  return (
    <article className="ficheLogement">
      
      FicheLogement ${userId}
      {data.find(rental => {
         console.log("userId", userId);
         console.log("rental.id", rental.id);
        return rental.id === userId &&  <Diaporama imgUrl={mountain} alt="mountain" /> 
      })}
     {!currentData.isLoaded && <Loader />}
   </article>
  );
}

export default FicheLogement;
