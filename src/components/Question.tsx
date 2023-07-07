import NavBar from "./NavBar";
import questions from "../questions.json";
import { useState } from "react";
function Question() {
  const a = localStorage.getItem("loggedAccount");
  const loggedUser: User = a ? JSON.parse(a) : null;
  const [questionValue, setQuestionValue] = useState("");

  function goBack() {
    window.history.back();
  }
  function saveQuestion() {
    writeQuestions();
    setQuestionValue("");
  }
  async function writeQuestions() {
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    const input = document.getElementById("question") as HTMLInputElement;
    questions.push({ id: loggedUser.id, question: input.value });
    await writableStream.write(new Blob([JSON.stringify(questions)]));
    await writableStream.close();
  }
  return (
    <div className="h-screen w-screen place-items-center">
      <NavBar></NavBar>
      <button onClick={goBack}>
        <img src="/foto/icona-back-nero.png" className="h-10 w-10"></img>
      </button>
      <h1 className="font-bold text-2xl text-center lg:text-4xl">
        Hai qualche domanda?
      </h1>
      <p className="text-center lg:text-4xl">
        Scrivici pure tutto ciò che ti passa per l'universo
      </p>
      <div className="bg-[#f5f5f5] mx-5 lg:mx-20 my-10 rounded-lg grid grid-cols-7">
        <input
          defaultValue={questionValue}
          id="question"
          placeholder="scrivi"
          className="font-light m-10 p-6 rounded-lg lg:text-2xl col-span-6"
        ></input>
        <button onClick={saveQuestion}>
          <img src="/foto/icona-send.png" className="h-15 lg:h-20"></img>
        </button>
      </div>
    </div>
  );
}
export default Question;
