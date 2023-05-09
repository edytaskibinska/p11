import { NavLink } from "react-router-dom";
import "./Menu.scss";

// utiliser Link ou Navlink pour lmes accueil a propos
function Menu({ menuArray }) {
  return (
    <ul className="menu">
      {/* {console.log("menuArray", menuArray)} */}
      {menuArray.map((item, index) => {
        return (
          <li key={index}>
            <NavLink className="navLink" index={item.index} to={item.url}>
              {item.linkName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
