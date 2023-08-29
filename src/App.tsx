import "./App.css";
import { Button } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Footer } from "flowbite-react";

function Navbar() {
  return (
    <nav className="gap-5 flex-col lg:flex-row flex justify-evenly items-center lg:h-24">
      <div>
        <h1 className="text-2xl font-bold ">
          Click<span className="text-red-900">Gps</span>
        </h1>
      </div>

      <ul className="flex gap-5 text-center flex-col lg:flex-row">
        <li>
          <a href="" className="hover:text-red-800 text-xl">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:text-red-800 text-xl">
            Locate
          </a>
        </li>
        <li>
          <a href="" className="hover:text-red-800 text-xl">
            Map
          </a>
        </li>
      </ul>
      <Button
        type="button"
        className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        login
      </Button>
    </nav>
  );
}



function DefaultCarousel() {
  return (
    <Carousel className="h-96">
      <img
        alt=""
        src="https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-1244352030-1.jpg"
      />
      <img
        alt="..."
        src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Salvador_BA_%28cropped%29_2.jpg"
      />
      <img
        alt="..."
        src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-06/dji_0627.jpg"
      />
      <img
        alt="..."
        src="https://www.viagensecaminhos.com/wp-content/uploads/2023/05/rio-branco-acre.jpg"
      />
      <img
        alt="..."
        src="https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/imagem/2019-06/frente-hotel_59755258a6f39.jpg"
      />
    </Carousel>
  );
}
function DefaultFooter() {
  return (
    <Footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="Gps" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/174/350/original/pin-location-gps-icon-png.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <h1 className="text-2xl font-bold ">
              Click<span className="text-red-900">Gps</span>
            </h1>
          </a>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Vendramini™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </Footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <DefaultCarousel />
      <DefaultFooter />
    </>
  );
}

export default App;
