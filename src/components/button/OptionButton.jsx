import optionrock from "../../images/icon-rock.svg";
import optionpaper from "../../images/icon-paper.svg";
import optionscissors from "../../images/icon-scissors.svg";
import optionlizard from "../../images/icon-lizard.svg";
import optionspock from "../../images/icon-spock.svg";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { useWindowSize } from "@react-hook/window-size";

export default function OptionButton({ option }) {
  const [width] = useWindowSize(() => {
    return window.innerWidth > 800 ? 1536 : 768;
  });
  const { choose, setChoose } = useContext(GameContext);

  const getOptionImage = (opt) => {
    switch (opt) {
      case "rock":
        return optionrock;
      case "paper":
        return optionpaper;
      case "scissors":
        return optionscissors;
      case "lizard":
        return optionlizard;
      case "spock":
        return optionspock;
      default:
        return "";
    }
  };
  const getOptionClass = (opt) => {
    if (width > 768) {
      switch (opt) {
        case "rock":
          return "top-[70%] right-[28%]";
        case "paper":
          return "top-[30%] left-[20%]";
        case "scissors":
          return "top-[-5%] right-[40%]";
        case "lizard":
          return "top-[70%] left-[28%]";
        case "spock":
          return "top-[30%] right-[20%]";
        default:
          return "";
      }
    } else {
      switch (opt) {
        case "rock":
          return "top-[72%] right-[12%]";
        case "paper":
          return "top-[28%] left-[72%]";
        case "scissors":
          return "top-[2%] right-[38%]";
        case "lizard":
          return "top-[73%] left-[15%]";
        case "spock":
          return "bottom-[42%] right-[70%]";
        default:
          return "";
      }
    }
  };

  const optionImage = getOptionImage(option);
  const optionClass = getOptionClass(option);

  return (
    <div
      onClick={() => {
        if (choose === "") {
          setChoose(option);
        }
      }}
      className={`option option-${option} ${choose ? null : optionClass}`}
    >
      <img
        alt={option.name}
        className={`option-img w-[80px] h-[80px]`}
        src={optionImage}
      ></img>
    </div>
  );
}
