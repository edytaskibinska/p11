import { Logo } from "../../assets";
import "./Footer.scss"
function Footer({ children }) {
  return (
    <footer className="footer">
      <Logo color="#FFF" />
      <p>© 2020 Kasa. All rights reserved</p>
      {children}
    </footer>
  );
}

export default Footer;
