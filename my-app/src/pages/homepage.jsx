// halaman untuk homepage bagian react js
import ImageSlider from "../components/imageslider";
// ambil fungsi dari JSON untuk data data yang diberikan

function HomePages() {
  return (
    <>
      <h1 className="font-pacifico font-bold text-center text-5xl my-6">
        Selamat Datang
      </h1>
      <ImageSlider />
      <div className="max-w-6xl mx-auto my-7">
        <h1 className="font-lexend font-bold text-4xl">Most Bought</h1>
      </div>
    </>
  );
}

export default HomePages;
