import "./Dropdown.scss";
import { Arrow } from "../../assets";

import { useState } from "react";

function Dropdown({ dropTitle, dropContent, isList, list }) {
  const [open, setOpen] = useState(false);

  const openDropdown = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className={`dropdown ${open ? "open" : ""} `}>
      <div className="dropTitle" onClick={openDropdown}>
        {dropTitle}
        <Arrow width="80" height="80" rotate={`${open ? 90 : 270} `} />
      </div>
      <div className={`dropContent ${open ? "open" : ""} `}>
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
