import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import questions from "../questions.json";
interface Props {
  user: User;
}

function UserTile(props: Props) {
  const name = props.user.name;
  const mail = props.user.mail;
  const navigate = useNavigate();
  const [questionValue, setQuestionValue] = useState(0);

  useEffect(() => {
    const nQuestions = questions.filter(
      (question) => question.id === props.user.id
    ).length;
    setQuestionValue(nQuestions);
  }, [props.user.id]);
  function openProfile(account: User) {
    const user = JSON.stringify(account);
    localStorage.setItem("searchedAccount", user);
    navigate("./profile");
  }
  function handleClick() {
    openProfile(props.user);
  }
  function questionNotification() {
    if (questionValue > 0) {
      return (
        <div className="bg-black rounded-full p-2 text-4xl font-bold text-white text-center">
          {questionValue} question/s
        </div>
      );
    } else {
      return <></>;
    }
  }
  return (
    <div className="bg-[#f5f5f5] aspect-square h-96 w-auto rounded-xl hover:border-8">
      {questionNotification()}
      <button onClick={handleClick} className="aspect-square h-80">
        <div className="grid grid-rows-2 place-items-center">
          <img
            src="/coll.app/foto/icona-foto-profilo.jpg"
            className="rounded-full h-24 w-24 row-span-1"
          ></img>
          <div className="row-span-1 p-5 text-left">
            <p className="text-2xl">
              <b>Nome:</b> {name}
            </p>
            <p className="text-2xl">
              <b>Mail:</b> {mail}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
export default UserTile;
