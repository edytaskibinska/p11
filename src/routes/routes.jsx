import Layout from "../layout/Layout/Layout";
import { Menu, Content, Header } from "../layout";
import { Home, About, ComponentsList } from "../pages";
import { routerArray } from "./routerArray";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { Footer } from "../layout";

const Root = () => {
  return (
    <Layout>
      <Header>
        <Menu menuArray={routerArray} />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* define page */}
      <Route index element={<Home />} />
      <Route path="page" element={<About />} />
      <Route path="components" element={<ComponentsList />} />
    </Route>
  )
);
