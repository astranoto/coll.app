import NavBar from "./NavBar";

function Projects() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="h-screen w-screen place-items-center">
      <NavBar />
      <button onClick={goBack} className="place-items-start items-start">
        <img
          src="/coll.app/foto/icona-back-nero.png"
          className="h-10 w-10 m-5"
        ></img>
      </button>
      <div className="h-5/6">
        <p className="text-2xl font-bold text-center my-10 lg:text-4xl">
          Eccoti, lo stato economico dei progetti a cui partecipi
        </p>
        <div className="bg-[#f5f5f5] rounded-lg h-4/6 mx-10 "></div>
      </div>
    </div>
  );
}
export default Projects;
