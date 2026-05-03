import clsx from "clsx";
import { getFarewellText } from "../utils/farewell";
import { languages } from "../utils/language";

export default function StatusSection(props) {
  const className = clsx("status-section", {
    won: props.gameWon,
    lost: props.gameLost,
    wrongGuess: !props.gameOver && props.isLastGuessedIncorrect,
  });

  const renderGameStatus = () => {
    if (!props.gameOver && props.isLastGuessedIncorrect) {
      return (
        <p>{getFarewellText(languages[props.wrongGuessCount - 1].name)}</p>
      );
    }

    if (props.gameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Congratulations 💥🎉</p>
        </>
      );
    }
    if (props.gameLost) {
      return (
        <>
          <h2>You Lost!</h2>
          <p>Better start learning Assembly now!!😢</p>
        </>
      );
    } else {
      return null;
    }
  };

  return <div className={className}>{renderGameStatus()}</div>;
}
