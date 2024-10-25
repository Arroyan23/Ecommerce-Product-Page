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
      <div className="max-w-6xl mx-auto flex justify-between">
        <img
          src={findById.poster}
          alt=""
          className="h-80 w-80 rounded-lg shadow-lg object-cover"
        />
        <div className="row ml-9 flex-1 max-w-lg">
          <p className="text-lg font-bold text-slate-500">{findById.brand}</p>
          <p className="mb-7">Terjual {detailJSON.terjual}</p>
          <p className="text-4xl font-bold font-lexend">{findById.price}</p>
          <div className="mt-9 border-t border-b py-2">
            <p className="font-bold font-lexend">Detail</p>
          </div>
          <div className="mt-4">
            <p>
              Kondisi:{" "}
              <span className="text-gray-500">{detailJSON.condition}</span>
            </p>
            <p>
              Etalase:{" "}
              <span className="text-gray-500">{detailJSON.etalase}</span>
            </p>
            <p className="mt-5">{detailJSON.description}</p>
          </div>
        </div>
        <div className="cart border  p-5">
          <p>Atur Jumlah dan Catatan</p>
          <div className="flex mt-9">
            <div className="flex space-x-3 border px-3 mr-3">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className="">
              <p>Stok Jumlah: {detailJSON.stock}</p>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
