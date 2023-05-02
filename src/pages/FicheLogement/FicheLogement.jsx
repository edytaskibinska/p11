import { Diaporama, GreyBlock, Thumb, Loader, Gallery } from "../../components";
import useFetch from "../../hooks/useFetchAsync";
import { urlSettings } from "../../routes/settings";

import mountain from "../../assets/images/backgroundMountains.png";
import { useParams } from "react-router-dom";

import "./FicheLogement.scss";

const slides = [
  { url: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg", title: "beach" },
  { url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg", title: "boat" },
  { url: "https://assets.architecturaldesigns.com/plan_assets/341202070/large/420028WNT_Render_1660597652.jpg", title: "forest" },
];

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
        FicheLogement static
        <Gallery slides={slides} />
      </article>
    </>
  );
}

export default FicheLogement;
