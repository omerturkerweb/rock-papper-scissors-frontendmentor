import { createContext, useState } from "react";

export const GameContext = createContext();

export const Provider = ({ children }) => {
  const [variants, setVariants] = useState([
    {
      name: "rock",
      win: ["scissors", "lizard"],
      lose: ["spock", "paper"],
      draw: ["rock"],
    },
    {
      name: "paper",
      win: ["rock", "spock"],
      lose: ["scissors", "lizard"],
      draw: ["paper"],
    },
    {
      name: "scissors",
      win: ["paper", "lizard"],
      lose: ["spock", "rock"],
      draw: ["scissors"],
    },
    {
      name: "lizard",
      win: ["paper", "spock"],
      lose: ["rock", "scissors"],
      draw: ["lizard"],
    },
    {
      name: "spock",
      win: ["scissors", "rock"],
      lose: ["lizard", "paper"],
      draw: ["spock"],
    },
  ]);
  const [handResult, setHandResult] = useState("");
  const [computerChoose, setComputerChoose] = useState("");
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);
  const [allOptions, setAllOptions] = useState([
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock",
  ]);
  const [choose, setChoose] = useState("");
  const data = {
    choose,
    setChoose,
    allOptions,
    setAllOptions,
    score,
    setScore,
    computerChoose,
    setComputerChoose,
    handResult,
    setHandResult,
    variants,
    setVariants,
    rules,
    setRules,
  };
  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};
