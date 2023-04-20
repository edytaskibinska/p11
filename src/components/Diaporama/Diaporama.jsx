import "./Diaporama.css";
import { Arrow } from "../../assets/icons";

function Diaporama({ imgUrl, alt}) {
  return (
    <div className="diaporama">
      <img src={imgUrl} alt={alt} />
    </div>
  );
}

export default Diaporama;
