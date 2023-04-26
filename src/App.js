import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext, useContext } from "react";
import { router } from "./routes/browserRouter";

import useFetch from "./hooks/useFetchAsync";

export const AppDataContext = createContext([]);

function App() {
  const currentData = useFetch("./data.json");
  const { data } = currentData;
  return (
    // <AppDataContext.Provider value={data}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    // </AppDataContext.Provider>
  );
}

export default App;
