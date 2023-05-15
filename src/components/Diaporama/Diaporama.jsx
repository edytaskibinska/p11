import "./Diaporama.scss";

function Diaporama({ imgUrl, alt, text }) {
  return (
    <div className="diaporama">
      <p className="text">{text}</p>
      <div className="cover"></div>
      <img src={imgUrl} alt={alt} />
    </div>
  );
}

export default Diaporama;
