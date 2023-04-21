import { Link } from "react-router-dom";

function Menu({ menuArray }) {
  return (
    <ul className="menu">
      {console.log("menuArray", menuArray)}
      {menuArray.map((item, index) => {
        return (
          <li>
            <Link
              //TODO index
              index={item.index}
              key={index}
              to={item.url}
            >
              {item.linkName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
