import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../users.json";

declare global {
  interface Window {
    showSaveFilePicker: () => Promise<FileSystemFileHandle>;
  }
}

function SignIn() {
  const [inputValue, setInputValue] = useState("");
  const [classValue, setClassValue] = useState(
    "rounded-lg h-12 w-2/3 p-3 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24"
  );
  function findUserByEmailAndPassword(mail: string, password: string) {
    const user = users.find(function (user) {
      return user.mail === mail && user.password === password;
    });
    return user || null;
  }
  const navigate = useNavigate();
  function checkAccount() {
    const inputElement1 = document.getElementById("mail") as HTMLInputElement;
    const inputElement2 = document.getElementById("ps") as HTMLInputElement;
    if (inputElement1 && inputElement2 && users.length > 0) {
      let input1 = inputElement1.value;
      let input2 = inputElement2.value;
      const foundUser = findUserByEmailAndPassword(input1, input2);
      if (foundUser) {
        const activeUser = JSON.stringify(foundUser);
        if (foundUser.role === "admin") {
          localStorage.setItem("loggedAccount", activeUser);
          return "/home-admin";
        } else {
          localStorage.setItem("loggedAccount", activeUser);
          return "/home-user";
        }
      }
      inputElement1.placeholder = "Wrong mail or password";
      inputElement2.placeholder = "Wrong mail or password";
      setClassValue(
        "rounded-lg h-12 w-2/3 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24 border-2 border-red-500"
      );
      setInputValue("");
      return "/";
    } else {
      inputElement1.placeholder = "Missing mail or password";
      inputElement2.placeholder = "Missing mail or password";
      setClassValue(
        "rounded-lg h-12 w-2/3 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24 border-2 border-red-500"
      );
      setInputValue("");
      return "/";
    }
  }
  async function handleClick() {
    navigate(checkAccount());
  }

  return (
    <div className="h-screen w-screen grid grid-rows-9 lg:grid-rows-1 lg:grid-cols-2">
      <div className="bg-black row-span-3 grid grid-rows-3 justify-center items-center lg:row-span-1 lg:col-span-1">
        <img
          src="/foto/logo_claim_white-27.png"
          className="row-span-2 h-auto w-auto"
        ></img>
        <h1 className="row-span-1 text-white text-left lg:text-center text-xl lg:text-4xl mx-16 lg:mb-48">
          ASTRA! Bentornato nel reame <br />
          ASTRANOTO
        </h1>
      </div>
      <div className="row-span-5 flex justify-center h-full lg:row-span-1 lg:col-span-1">
        <div className="m-16 bg-[#f5f5f5] rounded-xl grid grid-rows-2 lg:w-2/3">
          <div className="row-span-1 grid grid-rows-2 place-items-center h-full">
            <input
              id="mail"
              placeholder="Mail"
              defaultValue={inputValue}
              className={classValue}
            ></input>
            <input
              id="ps"
              placeholder="Password"
              defaultValue={inputValue}
              className={classValue}
            ></input>
          </div>
          <button
            onClick={handleClick}
            className=" row-span-1 flex justify-center bg-black my-16 text-white text-center items-center text-xl font-bold rounded-lg lg:h-48 lg:text-5xl lg:mt-24 lg:mx-24"
          >
            Accedi
          </button>
        </div>
      </div>
      <p className="bg-black row-span-1 flex justify-center text-center text-white text-xs">
        Astranoto Srl Società Benefit ©2022 <br /> Made in Bologna, Italy <br />
        All rights reserved - P.IVA 03990791208
      </p>
    </div>
  );
}

export default SignIn;
