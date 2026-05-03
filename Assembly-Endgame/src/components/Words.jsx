import clsx from "clsx";

export default function Words(props) {
  const letterElem = props.currentWord.split("").map((letter, i) => {
    const showFinalWord = props.gameLost || props.keyboard.includes(letter)
    const resultClass = clsx(
      props.gameLost && !props.keyboard.includes(letter) && "missed-word"
    );
    return  (
       <span className={resultClass} key={i}>{showFinalWord ? letter.toUpperCase() : ""}</span> 
    );
  });

  return (
    <div className="words">{letterElem}</div>
  );
}
