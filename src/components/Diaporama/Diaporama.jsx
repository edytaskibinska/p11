import "./Diaporama.css";

function Diaporama({ imgUrl, alt}) {
  return (
    <div className="diaporama">
      <img src={imgUrl} alt={alt} />
    </div>
  );
}

export default Diaporama;
