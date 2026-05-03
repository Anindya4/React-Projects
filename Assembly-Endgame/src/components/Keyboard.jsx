import { clsx } from "clsx";

export default function Keyboard(props) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  const keybordButton = alphabets.split("").map((a, i) => {
    const isGuessed = props.keyboard.includes(a);
    const isInWords = props.currentWord.includes(a);

    const className = clsx({
      correct: isGuessed && isInWords,
      wrong: isGuessed && !isInWords,
      disable: props.gameOver,
    });
    return (
      <button disabled={props.gameOver} key={i} className={className} onClick={() => props.onClick(a)}>
        {a.toUpperCase()}
      </button>
    );
  });

  return <div className="keyboard">{keybordButton}</div>;
}
