import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";
import "./style/index.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
