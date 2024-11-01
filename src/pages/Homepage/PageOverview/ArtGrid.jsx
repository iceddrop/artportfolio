import Navbarcomp from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "../../Homepage/Homepage.scss"
const ArtGrid = () => {
  return (
    <>
      <Sidebar />
      <Navbarcomp />
      <main className="lg:pl-64 w-full md:h-screen">
        <h4 className="text-font-four flex text-xl bg-slate-400 text-white py-4  justify-center">SAMPLES</h4>
        <div className=" bg-slate-400 w-full md:h-screen">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 px-2 lg:pl-4 pt-4">
            <div
              style={{
                "background-image":
                  "url(https://pixabay.com/get/g09ec40533351b5bfe25fccdbd7dfe3cc7cda02e4784ae27aad8569fc877a6e1c8cebc0b00312aff01f55fa5421c8e710701402ac79f82f0ab5ad8b437bb24a5daf77d13f9db559c12c84d1a3929575f4_640.png)",
              }}
              className="bg-red-300 col-span-1 row-span-9 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2021/05/14/22/11/faces-6254573_1280.jpg)",
              }}
              className="bg-blue-800 col-span-1 row-span-8  bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2021/09/03/00/51/temple-6594770_960_720.jpg)",
              }}
              className="bg-yellow-500 col-span-1 row-span-5 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2022/03/26/18/22/abstract-art-7093399_1280.jpg)",
              }}
              className="bg-indigo-900 col-span-1 row-span-12  bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2021/01/29/08/09/doodles-5960094_960_720.jpg)",
              }}
              className="bg-violet-800 col-span-1 row-span-6 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2022/04/28/19/49/woman-7161865_960_720.jpg)",
              }}
              className="bg-blue-400 col-span-1 row-span-10 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2019/02/19/13/40/horse-4006848_960_720.jpg)",
              }}
              className="bg-violet-800 col-span-1 row-span-8 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2021/12/02/02/58/crane-6839511_960_720.jpg)",
              }}
              className="bg-blue-400 col-span-1 row-span-12 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2016/12/14/06/10/art-1905711_1280.jpg)",
              }}
              className="bg-violet-800 col-span-1 row-span-10 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
            <div
              style={{
                "background-image":
                  "url(https://cdn.pixabay.com/photo/2024/05/17/06/59/abstract-8767544_960_720.jpg)",
              }}
              className="bg-blue-400 col-span-1 row-span-7 bg-cover bg-center bg-no-repeat w-full mobile-height"
            ></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ArtGrid;
