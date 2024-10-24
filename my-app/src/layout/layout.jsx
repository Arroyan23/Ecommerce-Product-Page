// halaman untuk mengatur layout perbelanjaan
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function LayoutRouter() {
  return (
    <>
      <div className="flex border-b-4 justify-between h-10  items-center p-6">
        <div className="flex space-x-4">
          <h1 className="font-dyna text-2xl">KatalogKita</h1>
        </div>
        <div className="flex space-x-3 ">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Products</a>
        </div>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default LayoutRouter;
