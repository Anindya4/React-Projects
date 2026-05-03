import clsx from "clsx";
import { languages } from "../utils/language";

export default function Languages(props) {
  const langElem = languages.map((lang, idx) => {


    const lostLanguage = idx < props.wrongGuessCount;
    const className = clsx("lang-chips", lostLanguage && "lost")

    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span 
        className={className} 
        key={idx} 
        style={style}
      >
        {lang.name}
      </span>
    );
  });

  return <div className="language-container">{langElem}</div>;
}
