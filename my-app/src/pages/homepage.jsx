// halaman untuk homepage bagian react js
import ImageSlider from "../components/imageslider";
// ambil fungsi dari JSON untuk data data yang diberikan
import MostPurchased from "../components/mostproduct";
import ProductsView from "../components/products";

function HomePages() {
  return (
    <>
      <h1 className="font-pacifico font-bold text-center text-5xl my-6 mt-16">
        Selamat Datang
      </h1>
      <ImageSlider />
      <div className="max-w-6xl mx-auto my-7">
        <h1 className="font-lexend font-bold text-4xl">Most Purchased</h1>
        <MostPurchased />
        <h1 className="font-lexend font-bold text-4xl">Our Products</h1>
        <ProductsView />
      </div>
      <div className="mb-96"></div>
    </>
  );
}

export default HomePages;
