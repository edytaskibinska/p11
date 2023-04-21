import { Logo } from "../../assets";

function Footer({ children }) {
  return (
    <footer className="footer">
      <Logo color="#FFF" />
      {children}
    </footer>
  );
}

export default Footer;
