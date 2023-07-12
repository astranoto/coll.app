import { Link } from "react-router-dom";
import Navbar from "./NavBar";

function HomeUser() {
  return (
    <div className=" h-screen w-screen items-center text-center">
      <div>
        <Navbar />
      </div>
      <p className="font-semibold my-16 text-2xl lg:text-6xl">
        <b>ASTRA! Benvenuto nella tua navicella personale</b>
        <br />
        Qui troverai tutto quello che ti serve
      </p>
      <div className="lg:grid lg:grid-cols-2 h-2/3">
        <div className="bg-[#f5f5f5] my-8 mx-16 hover:mx-8 grid grid-row-3 rounded-lg lg:h-full lg:col-span-1 lg:my-10 lg:hover:my-5">
          <div className="row-span-1 p-5">
            <img
              src="/coll.app/foto/icona-progetti.png"
              className="h-14 w-14 lg:h-24 lg:w-24"
            ></img>
          </div>
          <div className="row-span-1">
            <p className="px-10 font-bold text-lg lg:text-5xl">
              Visualizza i tuoi progetti
            </p>
            <p className="px-10 font-semibold lg:text-3xl lg:mt-7">
              Tutti i stati economici dei tuoi progetti in un'unico posto
            </p>
          </div>
          <div className="row-span-1 justify-self-end p-5">
            <Link to="projects">
              <img
                src="/coll.app/foto/icona-freccia.png"
                className="h-14 w-14 lg:h-24 lg:w-24"
              ></img>
            </Link>
          </div>
        </div>
        <div className="bg-[#f5f5f5] my-8 mx-16 hover:mx-8 grid grid-row-3 rounded-lg lg:h-full lg:col-span-1 lg:my-10 lg:hover:my-5">
          <div className="row-span-1 p-2">
            <img
              src="/coll.app/foto/icona-domanda.png"
              className="h-14 w-14 lg:h-24 lg:w-24"
            ></img>
          </div>
          <div className="row-span-1">
            <p className="px-10 pt-5 font-bold text-lg lg:text-5xl">
              Hai una domanda?
            </p>
            <p className="px-8 font-semibold lg:text-3xl lg:mt-7">
              Se hai dei dubbi, scriviceli pure in questa sezione
            </p>
          </div>
          <div className="row-span-1 justify-self-end p-5">
            <Link to="question">
              <img
                src="/coll.app/foto/icona-freccia.png"
                className="h-14 w-14 lg:h-24 lg:w-24"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
