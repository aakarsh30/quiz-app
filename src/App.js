import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import QuizBox from "./components/quiz-box";
function App() {
  return (
    <div>
      <Header />
      <QuizBox />
    </div>
  );
}

export default App;
