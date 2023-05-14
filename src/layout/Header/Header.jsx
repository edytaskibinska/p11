import { Logo } from "../../assets";
import "./Header.scss";

function Header({ children }) {
  return (
    <header className="header">
      <a href="/">
        <Logo color="#ff6060" />
      </a>
      {children}
    </header>
  );
}

export default Header;
