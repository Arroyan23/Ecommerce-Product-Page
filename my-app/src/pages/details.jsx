// halaman untuk mendapatkan detail
import productsPost from "../json/products.json";
import detailsPost from "../json/detail.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CartComp from "../components/cart";

function Detail() {
  const [product, setProduct] = useState();
  // ambil id nya dengan use State
  const { id } = useParams();
  const findById = productsPost.find((element) => element.id === id);
  //   temukan detail di json berbeda
  const detailJSON = detailsPost[id];

  // menambahkan fungsi untuk local storage
  const [cart, setCart] = useState([]);
  // load local storage pertama kali ketika di refresh
  useEffect(() => {
    // ambil cartnya terlebih dahulu
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    // jika terdapat cart nya maka ambil terlebih dahulu cartnya
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // simpan ke dalam cart setiap kali ada perubahan di dalam cart

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  // function untuk menambah cart

  const addCartToLocalStorage = (productObject) => {
    // menambahkan ke local storage
    setCart([...cart, productObject]);
  };

  return (
    <>
      <div className=""></div>
      <div className="mt-24"></div>
      {/* <div className="mt-24"></div>
      <div className="max-w-6xl mx-auto">

      </div> */}
      <div className="max-w-6xl mx-auto flex justify-between">
        <img
          src={findById.poster}
          alt=""
          bo
          className="h-80 w-80 rounded-lg shadow-lg object-cover"
        />
        <div className="row ml-9 flex-1 max-w-lg">
          <p className="text-lg font-bold text-slate-500">{findById.brand}</p>
          <p className="mb-7">Terjual {detailJSON.terjual}</p>
          <p className="text-4xl font-bold font-lexend">{findById.price}</p>
          <div className="mt-9 border-t border-white border-b py-2">
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
        <CartComp
          detailJSON={detailJSON}
          dataNormal={findById}
          onAddClick={addCartToLocalStorage}
        />
      </div>
    </>
  );
}

export default Detail;
