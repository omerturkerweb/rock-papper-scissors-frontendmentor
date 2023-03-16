import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";
import OptionButton from "../button/OptionButton";
import Compore from "../compore/Compore";
import Rules from "../../components/rules/Rules";

export default function Layout() {
  const { allOptions, score, choose, rules, setRules } =
    useContext(GameContext);

  useEffect(() => {
    const root = document.querySelector("#root");
    if (rules) {
      root.classList.add("rules-on");
    } else root.classList.remove("rules-on");
  }, [rules]);

  return (
    <>
      {rules ? <Rules /> : null}

      <div className="layout-main h-full w-[700px] flex flex-col gap-y-14 justify-center">
        <button
          onClick={() => {
            setRules(true);
          }}
          className="rules-button transition-all duration-300 hover:bg-[var(--white)] hover:text-[var(--dark-text)] absolute bottom-10 right-10 w-[130px] py-2 px-4 border-white bg-transparent rounded-md text-white"
        >
          RULES
        </button>
        <div className="dashboard dashboard-border py-3 px-7 flex flex-row justify-between">
          <div className="all-options flex flex-col">
            <img
              alt="logo-bonus"
              src={require("../../images/logo-bonus.svg").default}
            ></img>
          </div>
          <div className="score bg-[var(--white)] px-7 rounded-md flex flex-col items-center justify-center">
            <p className="text-[var(--score-text)]">SCORE</p>
            <span className="text-[35px] pt-0 text-[var(--dark-text)] leading-9">
              {score}
            </span>
          </div>
        </div>

        {choose ? (
          <Compore />
        ) : (
          <div className="game relative w-full h-[50%] bg-pentagon">
            {allOptions.map((opt, index) => (
              <OptionButton option={opt} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
