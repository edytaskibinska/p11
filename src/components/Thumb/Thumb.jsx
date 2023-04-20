import "./Thumb.css";

function Thumb({ id, text, imgUrl, alt }) {
  return (
    <div id={id} key={id} className="thumb">
      <div className="thumbBg">
        <img src={imgUrl} alt={alt} />

        <div className="thumbText">{text}</div>
      </div>
    </div>
  );
}

export default Thumb;
