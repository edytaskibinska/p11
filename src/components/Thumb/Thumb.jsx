import "./Thumb.css";

function Thumb({ text }) {
  return (
    <div className="thumb">
      <div className="thumbBg">
        <div className="thumbText">{text}</div>
      </div>
    </div>
  );
}

export default Thumb;
