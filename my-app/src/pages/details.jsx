// halaman untuk mendapatkan detail
import productsPost from "../json/products.json";
import detailsPost from "../json/detail.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail() {
  const [product, setProduct] = useState();
  // ambil id nya dengan use State
  const { id } = useParams();
  const findById = productsPost.find((element) => element.id === id);
  //   temukan detail di json berbeda
  const detailJSON = detailsPost[id];

  return (
    <>
      <div className="mt-24"></div>
      {/* <div className="mt-24"></div>
      <div className="max-w-6xl mx-auto">

      </div> */}
      <div className="max-w-6xl mx-auto flex">
        <img
          src={findById.poster}
          alt=""
          className="h-80 w-80 rounded-lg shadow-lg"
        />
        <div className="row ml-9">
          <p>{findById.brand}</p>
        </div>
        <div className="cart"></div>
      </div>
    </>
  );
}

export default Detail;
