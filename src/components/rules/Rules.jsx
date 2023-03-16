import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function Rules() {
  const { setRules } = useContext(GameContext);
  return (
    <div className="rules-main bg-white rounded-xl absolute z-50 p-8">
      <div className="rules-titles flex flex-row items-center justify-between">
        <h3 className="text-[var(--dark-text)] font-bold text-3xl"> RULES</h3>
        <img
          alt="rules"
          className="cursor-pointer"
          onClick={() => {
            setRules(false);
          }}
          src={require("../../images/icon-close.svg").default}
        ></img>
      </div>
      <img
        alt="rules-bonus"
        src={require("../../images/image-rules-bonus.svg").default}
      ></img>
    </div>
  );
}
