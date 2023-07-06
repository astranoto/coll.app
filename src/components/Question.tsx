import NavBar from "./NavBar";
function Question() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="h-screen w-screen place-items-center">
      <NavBar></NavBar>
      <button onClick={goBack}>
        <img src="/foto/icona-back-nero.png" className="h-10 w-10"></img>
      </button>
      <input
        placeholder="Hai qualche domanda?"
        className="font-bold text-xl text-center lg:text-4xl"
      ></input>
      <p className="text-center lg:text-4xl">
        Scrivici pure tutto ciò che ti passa per l'universo
      </p>
      <div className="bg-[#f5f5f5] mx-20 my-10 h-4/6 rounded-lg">
        <p className="font-light lg:text-2xl">Astra a tutti</p>
      </div>
    </div>
  );
}
export default Question;
