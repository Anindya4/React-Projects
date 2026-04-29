import { useState } from "react";

export default function Die(props) {

  const style = {
    backgroundColor: props.isHeld ? "#59e391" : "#ffffff",
  };

  return (
    <button
      className="button"
      style={style}
      onClick={() => props.hold(props.id)}
    >
      {props.value}
    </button>
  );
}
