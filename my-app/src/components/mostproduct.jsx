// halaman untuk menampilkan json most purchased
import mostData from "../json/most.json";

function MostPurchased() {
  return (
    <>
      <div className="w-full grid grid-cols-4 gap-3 my-3  justify-center">
        {mostData.map((element, index) => {
          return (
            <>
              <div className="card flex items-center my-3 border rounded-xl  shadow-xl cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1651747137395-065bd3af97bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="h-20 w-20 bg-black rounded-l-lg object-cover"
                />
                <div className="row mx-4">
                  <h1 className="font-lexend font-bold text-lg">
                    {element.brand}
                  </h1>
                  <p className="text-slate-400">{element.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MostPurchased;
