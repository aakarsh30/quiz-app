import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import QUESTIONS from "../../assets/questions.js";
import Timer from "../timer/index.js";
import Answers from "./answer.js";
import Result from "./results.js";
function QuizBox() {
  const shuffledarray = useRef();
  const [selanswers, setselanswers] = useState([]);
  const [answerState, setanswerState] = useState("");
  const activeques =
    answerState === "" ? selanswers.length : selanswers.length - 1;

  let timer = 15000;

  if (answerState === "answered") timer = 1000;
  if (answerState === "correct" || answerState === "wrong") timer = 2000;

  function answersel(ans) {
    setselanswers((prevans) => {
      return [...prevans, ans];
    });
    setanswerState("answered");

    setTimeout(() => {
      if (ans === QUESTIONS[activeques].answers[0]) {
        setanswerState("correct");
      } else {
        setanswerState("wrong");
      }

      setTimeout(() => {
        setanswerState("");
      }, 2000);
    }, 1000);
  }

  if (activeques == QUESTIONS.length) {
    console.log(selanswers);
    return <Result selAnswerList={selanswers} />;
  }
  return (
    <div class="row justify-content-center p-4">
      <div class="col-8 ques-cont p-3">
        <Timer
          key={activeques + 1}
          time={timer}
          onTimeOut={answerState === "" ? () => answersel(null) : null}
        />
        <div class="ques">{QUESTIONS[activeques].text}</div>
        <Answers
          key={activeques}
          answerList={QUESTIONS[activeques].answers}
          selAnswer={selanswers[selanswers.length - 1]}
          answerState={answerState}
          onSelect={answersel}
        />
      </div>
    </div>
  );
}

export default QuizBox;
