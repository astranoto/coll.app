import NavBar from "./NavBar";
import UserTile from "./UserTile";
import users from "../users.json";

function Contributors() {
  const loggedAccount = localStorage.getItem("loggedAccount");
  function goBack() {
    window.history.back();
  }
  return (
    <div className="h-screen w-screen place-items-center">
      <NavBar />
      <button onClick={goBack} className="place-items-start items-start">
        <img src="/foto/icona-back-nero.png" className="h-10 w-10 m-5"></img>
      </button>
      <div className="h-5/6">
        <p className="text-3xl font-bold text-center my-10 lg:text-5xl xl:text-6xl">
          Eccoti, tutti i collaboratori
        </p>
        <div className="mx-24 grid grid-cols-1 gap-12 xl:gap-6 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-7">
          {users.map((user) => {
            if (loggedAccount && user.id !== JSON.parse(loggedAccount).id) {
              return <UserTile user={user} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Contributors;
