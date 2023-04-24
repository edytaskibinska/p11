import "./App.css";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/browserRouter";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
