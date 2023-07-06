import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();

  function openProfile() {
    const a = localStorage.getItem("loggedAccount");
    if (a) {
      localStorage.setItem("searchedAccount", a);
      navigate("./profile");
    }
  }

  return (
    <div className="bg-black grid grid-cols-3 w-screen h-auto">
      <button className="justify-self-start">
        <img
          src="/foto/icona-menu.png"
          height="60"
          width="60"
          className="col-span-1"
        ></img>
      </button>
      <button className="justify-self-center">
        <img
          src="/foto/logo-piccolo-19.png"
          height="80"
          width="160"
          className="col-span-1 flex "
        ></img>
      </button>
      <div className="justify-self-end">
        <button onClick={openProfile}>
          <img
            src="/foto/icona-user.png"
            height="60"
            width="60"
            className="col-span-3"
          ></img>
        </button>
      </div>
    </div>
  );
}
export default NavBar;
