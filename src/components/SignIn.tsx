import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  function checkAccount() {
    const inputElement1 = document.getElementById("un") as HTMLInputElement;
    const inputElement2 = document.getElementById("mail") as HTMLInputElement;
    const inputElement3 = document.getElementById("ps") as HTMLInputElement;
    if (inputElement1 && inputElement2 && inputElement3) {
      let input1 = inputElement1.value;
      let input2 = inputElement2.value;
      let input3 = inputElement3.value;
      if (
        input1 == "admin" &&
        input2 == "admin@gmail.com" &&
        input3 == "admin123"
      ) {
        const info = {
          name: input1,
          mail: input2,
          password: input3,
        };
        const accountInfo = JSON.stringify(info);
        localStorage.setItem("AccountInfo", accountInfo);
        return "/home-admin";
      }
      if (
        input1 == "user" &&
        input2 == "user@gmail.com" &&
        input3 == "user123"
      ) {
        const info = {
          name: input1,
          mail: input2,
          password: input3,
        };
        const accountInfo = JSON.stringify(info);
        localStorage.setItem("AccountInfo", accountInfo);
        return "/home-user";
      } else {
        inputElement1.placeholder = "Wrong username, mail or password";
        inputElement2.placeholder = "Wrong username, mail or password";
        inputElement3.placeholder = "Wrong username, mail or password";
        inputElement1.className =
          "m-10 rounded-lg h-12 border-2 border-red-500";
        inputElement2.className =
          "m-10 rounded-lg h-12 border-2 border-red-500";
        setInputValue("");
        return "/";
      }
    } else {
      inputElement1.placeholder = "Wrong username, mail or password";
      inputElement2.placeholder = "Wrong username, mail or password";
      inputElement3.placeholder = "Wrong username, mail or password";
      inputElement1.className = "m-10 rounded-lg h-12 border-2 border-red-500";
      inputElement2.className = "m-10 rounded-lg h-12 border-2 border-red-500";
      inputElement3.className = "m-10 rounded-lg h-12 border-2 border-red-500";
      setInputValue("");
      return "/";
    }
  }
  function handleClick() {
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
      <div className="row-span-5 flex justify-center h-full item-center lg:row-span-1 lg:col-span-1">
        <div className="m-16 bg-[#f5f5f5] rounded-xl grid grid-rows-4 lg:w-2/3">
          <div className="row-span-3 grid grid-ros-3 item-center justify-center h-full my-24">
            <input
              id="un"
              placeholder="Username"
              defaultValue={inputValue}
              className="rounded-lg h-12 w-2/3 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24"
            ></input>
            <input
              id="mail"
              placeholder="Mail"
              defaultValue={inputValue}
              className="rounded-lg h-12 w-2/3 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24"
            ></input>
            <input
              id="ps"
              placeholder="Password"
              defaultValue={inputValue}
              className="rounded-lg h-12 w-2/3 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24"
            ></input>
          </div>
          <button
            onClick={handleClick}
            className="flex justify-center bg-black mx-10 my-16 text-white text-center items-center text-xl font-bold rounded-lg lg:h-48 lg:text-5xl lg:mt-24 lg:mx-48"
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
