import { Link } from "react-router-dom";
import Navbar from "./NavBar";

function HomeAdmin() {
  return (
    <div className=" h-screen w-screen items-center text-center">
      <div>
        <Navbar />
      </div>
      <p className="font-semibold my-16 text-2xl lg:text-6xl">
        <b>ASTRA a lei comandante! Benvenuto nella tua navicella personale</b>
        <br />
        Qui troverai tutto quello che ti serve
      </p>
      <div className="lg:grid lg:grid-cols-2 h-2/3">
        <div className="bg-[#f5f5f5] mt-24 mb-16 mx-16 hover:mx-8 grid grid-row-3 rounded-lg h-auto lg:col-span-1 lg:my-10 lg:hover:my-5">
          <div className="row-span-1 p-5">
            <img src="./foto/icona-progetti.png" height="80" width="80"></img>
          </div>
          <div className="row-span-1">
            <p className="px-10 font-bold text-lg lg:text-5xl">
              Ricerca collaboratori
            </p>
            <p className="px-10 font-semibold lg:text-3xl lg:mt-7">
              Tutti i stati economici dei tuoi progetti in un'unico posto
            </p>
          </div>
          <div className="row-span-1 justify-self-end p-5">
            <Link to="contributors">
              <img src="./foto/icona-freccia.png" className="h-20 w-20"></img>
            </Link>
          </div>
        </div>
        <div className="bg-[#f5f5f5] mx-16 hover:mx-8 grid grid-row-3 rounded-lg h-auto lg:col-span-1 lg:my-10 lg:hover:my-5">
          <div className="row-span-1 p-2">
            <img src="./foto/icona-plus.png" height="60" width="60"></img>
          </div>
          <div className="row-span-1">
            <p className="px-10 pt-5 font-bold text-lg lg:text-5xl">
              Aggiungere un collaboratore?
            </p>
            <p className="px-8 font-semibold lg:text-3xl lg:mt-7">
              Qui puoi aggiungere nuovi collaboratori
            </p>
          </div>
          <div className="row-span-1 justify-self-end p-5">
            <Link to="add-user">
              <img src="./foto/icona-freccia.png" className="h-20 w-20"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
