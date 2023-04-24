import { Menu, Content, Header, Footer } from "../";

function Layout({ menu, content }) {
  return (
    <section className="layout">
      <Header>
        <Menu menuArray={menu} />
      </Header>
      <Content>{content}</Content>
      <Footer></Footer>
    </section>
  );
}
export default Layout;
