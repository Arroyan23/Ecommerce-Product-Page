// halaman untuk mengatur product
import productsData from "../json/products.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";

function ProductsView() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`product/${id}`);
  };
  return (
    <>
      <div className="my-5 flex gap-7">
        {productsData.map((element, index) => {
          return (
            <>
              <div
                className="border rounded-xl shadow-lg cursor-pointer"
                onClick={() => handleClick(element.id)}
              >
                <img
                  src={element.poster}
                  alt=""
                  className="h-48 w-48 object-cover rounded-t-lg"
                />
                <div className="ml-4 my-5 words ">
                  <p className="text-sm">{element.brand}</p>
                  <p className="text-lg font-bold font-lexend">
                    Rp {element.price}
                  </p>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faCity} />
                    <p className="text-xs">{element.location}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductsView;
