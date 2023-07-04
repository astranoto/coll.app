import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="bg-black grid grid-cols-3 w-screen">
      <button className="justify-self-start">
        <img
          src="/foto/icona-menu.png"
          height="40"
          width="40"
          className="col-span-1 "
        ></img>
      </button>
      <button className="justify-self-center">
        <img
          src="/foto/logo-piccolo-19.png"
          height="40"
          width="80"
          className="col-span-1 flex "
        ></img>
      </button>
      <div className="justify-self-end">
        <Link to="Profile">
          <img
            src="/foto/icona-user.png"
            height="30"
            width="30"
            className="col-span-1 "
          ></img>
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
