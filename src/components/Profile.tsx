import { useNavigate } from "react-router-dom";
import users from "../users.json";
function Profile() {
  const navigate = useNavigate();
  const a = localStorage.getItem("searchedAccount");
  const info: User = a ? JSON.parse(a) : null;
  function goBack() {
    window.history.back();
  }
  async function writeUsers(newUsers: Array<User>) {
    const newHandle = await window.showSaveFilePicker();
    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();
    // write our file
    await writableStream.write(new Blob([JSON.stringify(newUsers)]));
    // close the file and write the contents to disk.
    await writableStream.close();
  }
  function changeAccount() {
    localStorage.clear();
    navigate("/");
  }
  function deleteProfile() {
    let a: Array<User> = [];
    a = users.filter((user) => user.id !== info.id);
    writeUsers(a);
    goBack();
  }
  function buttonVisible() {
    if (
      localStorage.getItem("searchedAccount") ==
      localStorage.getItem("loggedAccount")
    ) {
      return (
        <button
          className="mx-11 mb-5 px-10 py-5 bg-black hover:bg-slate-800 text-white font-bold text-3xl rounded-lg lg:text-5xl"
          onClick={changeAccount}
        >
          Esci
        </button>
      );
    } else {
      return (
        <button
          className="mx-11 mb-5 px-10 py-5 bg-black hover:bg-slate-800 text-white font-bold text-3xl rounded-lg lg:text-5xl"
          onClick={deleteProfile}
        >
          Cancella profilo
        </button>
      );
    }
  }
  return (
    <div className="h-screen w-screen lg:grid lg:grid-cols-2">
      <div className="lg:col-span-1">
        <div className="grid grid-cols-2">
          <button onClick={goBack} className="col-span-1 justify-self-start">
            <img
              src="/foto/icona-back-nero.png"
              className="h-10 w-10 m-10"
            ></img>
          </button>
          <button className="justify-self-end">
            <img
              src="/foto/icona-impostazioni.png"
              className="h-16 w-16 m-10"
            ></img>
          </button>
        </div>
        <div className="flex items-center justify-center lg:mt-80 lg:mb-24">
          <img
            src="/foto/icona-foto-profilo.jpg"
            className="rounded-full h-96"
          ></img>
        </div>
        <p className="pt-10 text-center font-bold text-5xl lg:text-9xl">
          {info.name}
        </p>
      </div>
      <div className="lg:col-span-1 lg:my-12 lg:mx-24 bg-[#f5f5f5] rounded-lg mx-12 my-12 ">
        <p className="py-10 px-5 text-justify text-2xl lg:text-5xl">
          <b>Mail:</b> <br></br>
          {info.mail}
        </p>
        <p className="py-10 px-5 text-justify text-2xl lg:text-5xl">
          <b>Password:</b> <br></br>
          {info.password}
        </p>
        <p className="py-10 px-5 text-justify text-2xl lg:text-5xl">
          <b>Ruolo:</b> <br></br>
          {info.role}
        </p>
        <div className="flex justify-center">{buttonVisible()};</div>
      </div>
    </div>
  );
}
export default Profile;
