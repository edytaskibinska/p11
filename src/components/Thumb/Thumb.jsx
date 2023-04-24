import "./Thumb.css";

function Thumb({ id, text, imgUrl, alt, onClick }) {
  return (
    <a href={`ficheLogement/${id}`} id={id} key={id} className="thumb" onClick={onClick}>
      <div className="thumbBg">
        <img src={imgUrl} alt={alt} />
        <div className="thumbText">{text}</div>
      </div>
    </a>
  );
}

export default Thumb;
