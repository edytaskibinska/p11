import { Logo } from "../../assets";
import "./Header.scss";

function Header({ children }) {
  return <header className="header">
    <Logo color="#ff6060" />{children}</header>;
}

export default Header;
