// halaman untuk komponen cart
import { useEffect, useState } from "react";

function CartComp({ detailJSON, dataNormal, onAddClick }) {
  const [countCart, setCountCart] = useState(1);
  const [stock, setStock] = useState(false);

  const plusClick = () => {
    if (countCart < detailJSON.stock) {
      setCountCart(countCart + 1);
      // reset pesan stock habis kalau kurang dari stok maksimum
      setStock(false);
      if (stock) {
        setStock(false);
      }
    } else {
      // untuk mengatur stock yang mencapai batas maksimal
      setStock(true);
    }
  };

  const minusClick = () => {
    if (countCart > 1) {
      setCountCart(countCart - 1);
    }
  };

  const product = {
    image: dataNormal.poster,
    price: dataNormal.price,
    brand: dataNormal.brand,
    quantity: countCart,
  };

  const handleClick = () => {
    onAddClick(product);
  };

  useEffect(() => {
    if (countCart < detailJSON.stock) {
      setStock(false);
    }
  }, [countCart, detailJSON.stock]);
  return (
    <>
      <div className="cart p-5 max-w-lg max-h-[21rem] rounded-lg shadow-xl bg-white">
        <p>Atur Jumlah dan Catatan</p>
        <div className="flex mt-9">
          <div className="flex space-x-3 border px-3 mr-3">
            <button onClick={minusClick}>-</button>
            <p>{countCart}</p>
            <button onClick={plusClick}>+</button>
          </div>
          <div className="">
            <p>Stok Jumlah: {detailJSON.stock}</p>
          </div>
        </div>
        {stock && (
          <p className="text-red-500 font-lexend text-xs mt-2">
            Maaf stock Habis
          </p>
        )}
        <div className="flex mt-24 justify-between items-center">
          <div className="text-sm text-slate-500">Subtotal</div>
          <div className="text-xl font-bold">
            Rp {(dataNormal.price * countCart).toLocaleString("id-ID")}
          </div>
        </div>
        <div className="flex space-x-2 mt-6">
          <button className="bg-slate-800 py-2 px-3 w-1/2 rounded-xl font-bold text-white text-sm">
            Beli
          </button>
          <button
            className="border border-slate-800 py-2 px-3 w-1/2 font-bold rounded-xl"
            onClick={handleClick}
          >
            + Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default CartComp;
