import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import users from "../users.json";
import questions from "../questions.json";
import payments from "../payments.json";

function Profile() {
  const [password, setPassword] = useState(passwordHider);
  const navigate = useNavigate();
  const a = localStorage.getItem("searchedAccount");
  const info: User = a ? JSON.parse(a) : null;

  async function writeUsers(newUsers: Array<User>) {
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    await writableStream.write(new Blob([JSON.stringify(newUsers)]));
    await writableStream.close();
  }
  async function writeQuestions(newQuestions: Array<Question>) {
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    await writableStream.write(new Blob([JSON.stringify(newQuestions)]));
    await writableStream.close();
  }
  async function writePayments(newPayment: Array<Payment>) {
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    await writableStream.write(new Blob([JSON.stringify(newPayment)]));
    await writableStream.close();
  }
  function changeAccount() {
    localStorage.clear();
    navigate("/");
  }
  function deleteProfile() {
    let a: Array<User> = [];
    let b: Array<Question> = [];
    let c: Array<Payment> = [];
    a = users.filter((user) => user.id !== info.id);
    b = questions.filter((question) => question.id !== info.id);
    c = payments.filter((payment) => payment.id !== info.id);
    writeUsers(a);
    writeQuestions(b);
    writePayments(c);
    window.history.back();
  }
  function buttonDeleteVisible() {
    if (
      localStorage.getItem("searchedAccount") ==
      localStorage.getItem("loggedAccount")
    ) {
      return (
        <button className="mx-11 mb-5 btn-primary" onClick={changeAccount}>
          Esci
        </button>
      );
    } else {
      return (
        <button className="mx-11 mb-5 btn-primary" onClick={deleteProfile}>
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
    <div className="h-auto w-auto lg:grid lg:grid-cols-2">
      <div className="lg:col-span-1">
        <div className="grid grid-cols-2">
          <button
            onClick={() => window.history.back()}
            className="col-span-1 justify-self-start m-5"
          >
            <img
              src="foto/icona-back-nero.png"
              className="h-7 w-7 md:h-10 md:w-10 m-10"
            ></img>
          </button>
          <button className="justify-self-end">
            <img
              src="foto/icona-impostazioni.png"
              className="h-7 w-7 md:h-16 md:w-16 m-10"
            ></img>
          </button>
        </div>
        <div className="grid place-items-center">
          <img
            src="foto/icona-foto-profilo.jpg"
            className="rounded-full h-60 md:h-96"
          ></img>
        </div>
        <p className="pt-10 text-center font-bold text-5xl lg:text-9xl">
          {info.name}
        </p>
      </div>
      <div className="m-12 md:grid md:grid-cols-2 md:gap-y-10 rounded-lg bg-[#f5f5f5] lg:flex lg:flex-col lg:space-y-5 place-items-center lg:pt-12">
        <p className="text-justify text-2xl lg:text-3xl">
          <b className="text-3xl md:text-5xl">Mail:</b> <br></br>
          {info.mail}
        </p>
        <div className="flex space-x-5">
          <p className="col-span-1 text-justify text-2xl lg:text-3xl">
            <b className="text-3xl md:text-5xl">Password:</b> <br></br>
            {password}
          </p>
          <button className="place-self-end" onClick={changeViewPassword}>
            <img
              src="foto/icona-occhio.png"
              className="h-12 w-12 md:h-16 md:w-16"
            ></img>
          </button>
        </div>
        <p className="text-justify text-2xl lg:text-3xl">
          <b className="text-3xl md:text-5xl">Domande:</b> <br></br>
          {questionShower()}
        </p>
        <p className="text-2xl lg:text-3xl">
          <b className="text-3xl md:text-5xl">Ruolo:</b> <br></br>
          {info.role}
        </p>
        <div className="m-5 btn-primary w-max mx-auto">
          <Link to="/show-payments">Vedi pagamenti</Link>
        </div>
        {localStorage.getItem("searchedAccount") !==
          localStorage.getItem("loggedAccount") && (
          <div className="m-5 btn-primary w-max mx-auto">
            <Link to="/payments">Aggiungi Pagamenti</Link>
          </div>
        )}
        <div className="grid md:col-span-2">
          <div className="place-self-center">{buttonDeleteVisible()};</div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
