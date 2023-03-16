import PlayAgain from "../../components/button/PlayAgain";
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import OptionButton from "../button/OptionButton";
import { useWindowSize } from "@react-hook/window-size";

export default function Compore() {
  const [width, height] = useWindowSize(() => {
    return window.innerWidth > 800 ? 1536 : 768;
  });
  const {
    setComputerChoose,
    choose,
    computerChoose,
    variants,
    handResult,
    setHandResult,
    setScore,
  } = useContext(GameContext);
  const getHandResult = (humanChoose, houseChoose) => {
    const human = variants.find((vari) => vari.name === humanChoose);
    if (human.draw.includes(houseChoose)) {
      setHandResult("draw");
    } else if (human.win.includes(houseChoose)) {
      setHandResult("human");
      setScore((score) => score + 1);
    } else if (human.lose.includes(houseChoose)) setHandResult("house");
  };
  useEffect(() => {
    if (computerChoose === "") {
      setTimeout(() => {
        getComputerChoose();
        const humanChoose = document.querySelector(".human-choose");
        const computerChoose = document.querySelector(".computer-choose");
        const result = document.querySelector(".result");
        if (width > 768) {
          humanChoose.classList.add("translate-x-[-100px]");
          computerChoose.classList.add("translate-x-[100px]");
          result.classList.remove("invisible");
          result.classList.remove("opacity-0");
          result.classList.add("!w-[350px]");
        } else if (width < 768) {
          result.classList.remove("invisible");
          result.classList.remove("opacity-0");
        }
      }, 1000);
    }
  }, []);
  useEffect(() => {
    const humanChoose = document.querySelector(".human-choose");
    const computerChoose = document.querySelector(".computer-choose");
    if (handResult === "human") {
      humanChoose.classList.add("win-side");
    } else if (handResult === "house") {
      computerChoose.classList.add("win-side");
    }
  }, [handResult]);
  useEffect(() => {
    if (computerChoose !== "") {
      getHandResult(choose, computerChoose);
    }
  }, [computerChoose]);
  const getComputerChoose = () => {
    const number = Math.floor(Math.random() * 5) + 1;
    switch (number) {
      case 1:
        setComputerChoose("rock");
        break;
      case 2:
        setComputerChoose("paper");
        break;
      case 3:
        setComputerChoose("scissors");
        break;
      case 4:
        setComputerChoose("lizard");
        break;
      case 5:
        setComputerChoose("spock");
        break;
      default:
    }
  };

  return (
    <div className="compore-main h-[50%] relative">
      <div className="human-choose transition-all duration-300 w-[0] relative flex flex-col justify-center top-[25%]  ml-[20%]">
        <h3 className="human-choose-text mb-5 ml-5 whitespace-nowrap tracking-widest">
          YOU PICKED
        </h3>
        <div className="human-option">
          <OptionButton option={choose} />
        </div>
      </div>
      <div className="result transition-all duration-300 invisible opacity-0 absolute top-[35%] ml-[24.5%]  flex flex-col items-center justify-center gap-y-3">
        <h3 className="text-3xl text-white tracking-widest">
          {handResult === "draw"
            ? "IT'S DRAW"
            : handResult === "human"
            ? "YOU WIN"
            : "YOU LOSE"}
        </h3>
        <PlayAgain />
      </div>
      <div className="computer-choose transition-all duration-300  relative flex flex-col top-[15%] ml-[60%]">
        {computerChoose ? (
          <h3 className="computer-choose-text mb-5 tracking-widest">
            THE HOUSE PICKED
          </h3>
        ) : null}

        <div className="house-option">
          {computerChoose ? (
            <OptionButton option={computerChoose} />
          ) : (
            <div
              className={
                width > 768
                  ? "house-option-holder bg-[var(--dark-text)] mt-10 w-[130px] h-[130px] rounded-full"
                  : "house-option-holder bg-[var(--dark-text)] w-[95px] h-[95px] rounded-full"
              }
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}
