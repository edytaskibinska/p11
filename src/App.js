import "./App.css";
import { Tag, Thumb, Dropdown } from "../src/components";
import { Home, About, ComponentsList } from "../src/pages";
import useFetch from "./hooks/useFetchAsync";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
//import useFetch from "./hooks/useFetch";

//temp

//end temp
function App() {
  //router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* define page */}

        <Route index element={<Home />} />
        <Route  path="page" element={<About />} />
        <Route  path="components" element={<ComponentsList />} />
      </Route>
    )
  );
  //router

  return (
    <div className="App">
      <RouterProvider router={router}/>
 
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/page">About</Link>
        <Link to="/components">components</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
