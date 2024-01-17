import React, { useRef, useState } from "react";
import "./index.css";

function Answers({ answerList, selAnswer, answerState, onSelect }) {
  const shuffledarray = useRef();

  if (!shuffledarray.current) {
    shuffledarray.current = [...answerList];
    shuffledarray.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul>
      {shuffledarray.current.map((ans, index) => {
        let cssClass = "";
        if (answerState === "answered" && selAnswer === ans) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          selAnswer === ans
        ) {
          cssClass = answerState;
        }
        return (
          <li key={index}>
            <button className={cssClass} onClick={() => onSelect(ans)}>
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
