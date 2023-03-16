import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

export default function PlayAgain(props) {
  const { setChoose, setComputerChoose, setHandResult } =
    useContext(GameContext);
  return (
    <button
      onClick={() => {
        setChoose("");
        setComputerChoose("");
        setHandResult("");
      }}
      className="play-again-button tracking-widest text-sm hover:bg-[var(--dark-text)] hover:text-white   transition-all duration-300 text-[#042c5fa1] bg-white py-2 px-8 rounded-md"
      {...props}
    >
      PLAY AGAIN
    </button>
  );
}
