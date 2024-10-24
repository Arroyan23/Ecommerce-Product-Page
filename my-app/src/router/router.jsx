// halaman untuk mengatur router halaman
import { createBrowserRouter } from "react-router-dom";
import LayoutRouter from "../layout/layout";
import HomePages from "../pages/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRouter />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
    ],
  },
]);
