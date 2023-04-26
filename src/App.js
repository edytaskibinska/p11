import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { router } from "./routes/browserRouter";

export const AppDataContext = createContext([]);

function App() {
  return <RouterProvider className="App" router={router} />;
}

export default App;
