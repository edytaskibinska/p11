import "./Author.scss";

function Author({ surname, name, photo }) {
  return (
    <div className="author">
      <div className="text">
        {name}
      </div>
      <div className="photo">
        <img src={photo} alt="" />
      </div>
    </div>
  );
}

export default Author;
