import "./Dropdown.css";
import { Arrow } from "../../assets/icons";

function Dropdown({ dropTitle, dropContent, isList, list }) {
  return (
    <div className="dropdown">
      <div className="dropTitle">
        {dropTitle}
        <Arrow />
      </div>
      <div className="dropContent">
        {isList ? (
          <ul>
            {list?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        ) : (
          <div>{dropContent}</div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
