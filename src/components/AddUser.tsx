import NavBar from "./NavBar";
import { useState } from "react";
import users from "../users.json";

function AddUser() {
  const [inputValue, setInputValue] = useState("");
  const [classValue, setClassValue] = useState(
    "rounded-lg h-12 w-2/3 place-self-center p-3 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24 row-span-1 col-span-2 xl:col-span-1"
  );
  function goBack() {
    window.history.back();
  }
  async function writeUser(
    name: string,
    mail: string,
    password: string,
    role: string
  ) {
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    const id = users[users.length - 1].id + 1;
    users.push({
      id: id,
      name: name,
      mail: mail,
      password: password,
      role: role,
    });
    await writableStream.write(new Blob([JSON.stringify(users)]));
    await writableStream.close();
  }
  function addUser() {
    const inputName = document.getElementById("name") as HTMLInputElement;
    const inputMail = document.getElementById("mail") as HTMLInputElement;
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const inputRole = document.getElementById("role") as HTMLInputElement;
    if (
      inputName.value &&
      inputMail.value &&
      inputPassword.value &&
      inputRole.value
    ) {
      writeUser(
        inputName.value,
        inputMail.value,
        inputPassword.value,
        inputRole.value
      );
      setInputValue("");
    } else {
      setInputValue("Missing some values");
      setClassValue(
        "rounded-lg h-12 w-2/3 m-12 lg:h-24 lg:text-2xl lg:mx-12 xl:mx-24 border-2 border-red-500"
      );
    }
  }
  return (
    <div>
      <NavBar />
      <button onClick={goBack}>
        <img
          src="/coll.app/foto/icona-back-nero.png"
          className="h-10 w-10 m-5"
        ></img>
      </button>
      <h1 className="text-center font-bold text-4xl xl:text-6xl">
        Chi è il nuovo collaboratore?
      </h1>
      <div className="h-screen">
        <div className="bg-[#f5f5f5] py-10 m-24 h-4/6 rounded-xl grid grid-cols-1 grid-rows-5 xl:grid-rows-3 xl:grid-cols-2">
          <input
            id="name"
            placeholder="Name"
            defaultValue={inputValue}
            className={classValue}
          ></input>
          <input
            id="mail"
            placeholder="Mail"
            defaultValue={inputValue}
            className={classValue}
          ></input>
          <input
            id="password"
            placeholder="Password"
            defaultValue={inputValue}
            className={classValue}
          ></input>
          <select
            id="role"
            placeholder="Role"
            defaultValue={inputValue}
            className={classValue}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            onClick={addUser}
            className="bg-black p-6 px-12 col-span-2 rounded-lg text-white text-xl place-self-center xl:text-6xl font-bold"
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
