// halaman untuk mengatur cart
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function CartsShow() {
  return (
    <>
      <div className="m-16"></div>
      <div className="px-9">
        <h1 className="text-2xl font-bold mb-5">Keranjang</h1>
        {/* untuk box di atas keranjang */}
        <div className="flex justify-between">
          <div className="min-w-[52rem]  rounded-t-xl p-3 shadow-xl bg-white  justify-between">
            <div className="flex justify-between font-lexend font-bold">
              <p>Pilih Semua</p>
              <p className="cursor-pointer">Hapus Semua</p>
            </div>
          </div>
          {/* ringkasan belanja */}
          <div className="flex-1 bg-white shadow-xl rounded-xl ml-5 absolute right-9 h-48 w-[22rem] p-5">
            <h2>Ringkasan Belanja</h2>
            <hr className="my-3" />
            <div className="flex justify-between">
              <p>Total</p>
              <p className="font-bold">Rp 356.000</p>
            </div>
            <hr className="my-4" />
            <button className="bg-slate-600 rounded-xl shadow-xl text-white w-full h-9">
              Beli
            </button>
          </div>
        </div>
        {/* untuk menampilkan cart nya secara dummy */}
        <div className="flex justify-between ">
          <div className="max-w-[52rem] flex-1">
            {/* untuk menampilkan bagian indexnya */}
            <div className="mt-3 rounded-b-xl p-5   flex items-start justify-between bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-24 w-24 rounded-lg "
              />
              <div className="flex-1 ml-3">
                <p>Dalgona Coffee Mixed</p>
              </div>
              <div className="font-bold text-xl">
                <p>Rp 365.000</p>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="mt-11 text-red-500 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartsShow;
