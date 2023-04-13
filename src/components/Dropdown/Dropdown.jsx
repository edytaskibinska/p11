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
            {list.map((item) => {
              return <li key={item.id}>item</li>;
            })}
          </ul>
        ) : (
          dropContent
        )}
      </div>
    </div>
  );
}

export default Dropdown;
