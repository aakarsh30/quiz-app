import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import questions from "../../assets/questions";

function Result({ selAnswerList }) {
  let skippedAns = selAnswerList.filter((ans) => ans === null);
  let correctAns = selAnswerList.filter(
    (ans, index) => ans === questions[index].answers[0]
  );

  let skippedAnsPer = Math.round(
    (skippedAns.length / selAnswerList.length) * 100
  );
  let correctAnsPer = Math.round(
    (correctAns.length / selAnswerList.length) * 100
  );
  let wrongPer = 100 - skippedAnsPer - correctAnsPer;

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Quiz</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Skipped {skippedAnsPer}% </p>
          <p>Correct {correctAnsPer}% </p>
          <p>Wrong {wrongPer}% </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => window.location.reload()} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Result;
