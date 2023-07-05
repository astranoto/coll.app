import NavBar from "./NavBar";
import UserTile from "./UserTile";
import users from "../users.json";

function Contributors() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="h-screen w-screen place-items-center">
      <NavBar />
      <button onClick={goBack} className="place-items-start items-start">
        <img src="/foto/icona-back-nero.png" className="h-10 w-10"></img>
      </button>
      <div className="h-5/6">
        <p className="text-2xl font-bold text-center my-10 lg:text-4xl">
          Eccoti, tutti i collaboratori
        </p>
        <div className="mx-24 grid grid-cols-1 gap-12 place-items-center xl:grid-cols-3">
          {users.map((user) => {
            if (
              JSON.stringify(user) !== localStorage.getItem("loggedAccount")
            ) {
              return <UserTile user={user} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Contributors;
