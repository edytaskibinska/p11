import "./Diaporama.scss";

function Diaporama({ imgUrl, alt, text }) {
  return (
    <div className="diaporama">
      <p className="text">{text}</p>
      <img src={imgUrl} alt={alt} />
    </div>
  );
}

export default Diaporama;
