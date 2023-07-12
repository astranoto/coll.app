import { Link } from "react-router-dom";
import Navbar from "./NavBar";

function HomeAdmin() {
  return (
    <div className=" h-screen w-screen items-center text-center">
      <div>
        <Navbar />
      </div>
      <p className="font-semibold m-8 text-xl lg:text-6xl">
        <b>ASTRA a lei comandante! Benvenuto nella tua navicella personale</b>
        <br />
        Qui troverai tutto quello che ti serve
      </p>
      <div className="lg:grid lg:grid-cols-2 p-3 h-3/5">
        <div className="bg-[#f5f5f5] my-8 mx-16 hover:mx-8 grid grid-row-3 rounded-lg lg:h-full lg:col-span-1 lg:my-10 lg:hover:my-5">
          <div className="row-span-1 p-5">
            <img
              src="foto/icona-progetti.png"
              className="h-14 w-14 lg:h-24 lg:w-24"
            ></img>
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
              <img
                src="foto/icona-freccia.png"
                className="h-14 w-14 lg:h-24 lg:w-24"
              ></img>
            </Link>
          </div>
        </div>
        <div className="bg-[#f5f5f5] my-8 mx-16 hover:mx-8 grid grid-row-3 rounded-lg lg:h-full lg:col-span-1 lg:my-10 lg:hover:my-5">
          <div className="row-span-1 p-2">
            <img
              src="foto/icona-plus.png"
              className="h-14 w-14 lg:h-24 lg:w-24"
            ></img>
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
              <img
                src="foto/icona-freccia.png"
                className="h-14 w-14 lg:h-24 lg:w-24"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
