import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import QuizBox from "./components/quiz-box";
import { useState } from "react";
import { Button } from "react-bootstrap";
function App() {
  const [startquiz, setstartquiz] = useState(false);

  return (
    <div className="outer">
      <Header />
      {startquiz === false ? (
        <Button className="playbutton" onClick={() => setstartquiz(true)}>
          Play Quiz
        </Button>
      ) : (
        <QuizBox />
      )}
    </div>
  );
}

export default App;
