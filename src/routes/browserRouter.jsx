import { Layout } from "../layout";

import { Home, About, ComponentsList, Page404, FicheLogement} from "../pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { routerArray } from "./routerArray";
import { Outlet } from "react-router-dom";

const Root = () => {
  return <Layout menu={routerArray} content={<Outlet />}/>;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="page" element={<About />} />
      <Route path="components" element={<ComponentsList />} />
      <Route path="*" element={<Page404 />} />
      <Route 
      path={`ficheLogement/:userId`} 
      element={<FicheLogement />} 
      //HELP trouver solution pour reload page on click sur l'element dans home -> que kled data from useFetch se chargent aussi sur le route de fiche logement
      // loader={({ params }) => {
      //   console.log("params", params)
      //   //return fetch(`/data/{params.teamId}`);
      //   return fetch(`./data.json`);
      // }} 
      />
    </Route>
  )
);

export default Root;

//DOING
