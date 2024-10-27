// halaman untuk mengatur cart

function CartStore() {
  return (
    <>
      <div className="max-h-64 w-[30rem] bg-white border-2 shadow-xl absolute top-9 z-50 right-8 rounded-xl p-3 overflow-y-scroll">
        <p>Keranjang</p>
        {/* penyesuaian halaman cart */}
        <div className="detail-cart mt-4">
          <hr className="mb-2" />
          <div className="flex justify-between items-start">
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                "
              className="h-16 w-16 rounded-lg"
              alt=""
            />
            <div className="text-sm flex-1 ml-3">
              <p>Dalgona Coffee With Extra</p>
            </div>
            {/* untuk index harganya */}
            <div className="font-bold">
              <p>1 x 365.000</p>
            </div>
          </div>
        </div>
        <div className="detail-cart mt-4">
          <hr className="mb-2" />
          <div className="flex justify-between items-start">
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                "
              className="h-16 w-16 rounded-lg"
              alt=""
            />
            <div className="text-sm flex-1 ml-3">
              <p>Dalgona Coffee With Extra</p>
            </div>
            {/* untuk index harganya */}
            <div className="font-bold">
              <p>1 x 365.000</p>
            </div>
          </div>
        </div>
        <div className="detail-cart mt-4">
          <hr className="mb-2" />
          <div className="flex justify-between items-start">
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                "
              className="h-16 w-16 rounded-lg"
              alt=""
            />
            <div className="text-sm flex-1 ml-3">
              <p>Dalgona Coffee With Extra</p>
            </div>
            {/* untuk index harganya */}
            <div className="font-bold">
              <p>1 x 365.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartStore;
