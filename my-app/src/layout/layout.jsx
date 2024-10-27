import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import CartStore from "./components/cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LayoutRouter() {
  const Navigate = useNavigate();
  const [cartHover, setCartHover] = useState(false);
  const [cartStoreHover, setCartStoreHover] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setCartHover(true);
  };

  // tambahkan fungsi untuk ketika di lepas tidak memberikan jeda
  const handleNoTimeOut = () => {
    setCartHover(false);
  };

  // tambahkan fungsi ketika

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      if (!cartStoreHover) {
        setCartHover(false);
      }
    }, 800);
    setTimeoutId(id); // set time outnya di ulang jadi kebalikannya
  };

  // handle klik navigate

  const handleClickNavigate = () => {
    Navigate("/cart");
  };

  return (
    <>
      <div className="flex border-b-4 justify-between h-10 items-center p-6 fixed top-0 left-0 w-full bg-white z-10 ">
        <div className="flex space-x-4">
          <h1 className="font-dyna text-2xl">KatalogKita</h1>
        </div>
        <div className="flex space-x-3 ">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Products</a>
        </div>
        <div className="flex space-x-2 items-center">
          <FontAwesomeIcon
            icon={faCartShopping}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer text-xl hover:bg-slate-200 p-1 rounded-lg"
            onClick={handleClickNavigate}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {cartHover && (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleNoTimeOut}>
              <CartStore />
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default LayoutRouter;
