import { useNavigate } from "react-router-dom";
import { useState } from "react";
import users from "../users.json";
import questions from "../questions.json";
function Profile() {
  const [password, setPassword] = useState(passwordHider);
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
  async function writeQuestions(newQuestions: Array<Question>) {
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    await writableStream.write(new Blob([JSON.stringify(newQuestions)]));
    await writableStream.close();
  }
  function changeAccount() {
    localStorage.clear();
    navigate("/");
  }
  function deleteProfile() {
    let a: Array<User> = [];
    let b: Array<Question>;
    a = users.filter((user) => user.id !== info.id);
    b = questions.filter((question) => question.id !== info.id);
    writeUsers(a);
    writeQuestions(b);
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
  function questionShower() {
    const userQuestions = questions.filter((question) => {
      if (info.id == question.id) {
        return question.question;
      }
    });
    if (userQuestions.length > 0) {
      let n = 0;
      return userQuestions.map((userQuestion) => {
        n++;
        return <li key={n}>{userQuestion.question}</li>;
      });
    }
  }
  function passwordShower() {
    const a = localStorage.getItem("searchedAccount");
    const info: User = a ? JSON.parse(a) : null;
    return info.password;
  }
  function passwordHider() {
    const a = localStorage.getItem("searchedAccount");
    const info: User = a ? JSON.parse(a) : null;
    let pointPassword = "";
    for (let i = 0; i < info.password.length; i++) {
      pointPassword = pointPassword + "-";
    }
    return pointPassword;
  }
  function changeViewPassword() {
    if (password[0] == "-") {
      setPassword(passwordShower);
    } else {
      setPassword(passwordHider);
    }
  }
  return (
    <div className="h-screen w-screen lg:grid lg:grid-cols-2">
      <div className="lg:col-span-1">
        <div className="grid grid-cols-2">
          <button
            onClick={goBack}
            className="col-span-1 justify-self-start m-5"
          >
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
        <p className="py-10 lg:py-16 px-5 text-justify text-2xl lg:text-5xl">
          <b>Mail:</b> <br></br>
          {info.mail}
        </p>
        <div className="grid grid-cols-2 place-items-left">
          <p className="col-span-1 py-10 lg:py-16 px-5 text-justify text-2xl lg:text-5xl">
            <b>Password:</b> <br></br>
            {password}
          </p>
          <button onClick={changeViewPassword}>
            <img src="/foto/icona-occhio.png" className="h-16 w-16"></img>
          </button>
        </div>
        <p className="py-10 lg:py-16 px-5 text-justify text-2xl lg:text-5xl">
          <b>Ruolo:</b> <br></br>
          {info.role}
        </p>
        <p className="py-10 lg:py-16 px-5 text-justify text-2xl lg:text-5xl">
          <b>Domande:</b> <br></br>
          {questionShower()}
        </p>
        <div className="flex justify-center">{buttonVisible()};</div>
      </div>
    </div>
  );
}
export default Profile;
