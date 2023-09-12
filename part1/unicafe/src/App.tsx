import { useState } from "react";
import "./App.css";
import { Feedback } from "./components/Feedback";
import { Statistics } from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Feedback
        handleClickGood={() => setGood(good + 1)}
        buttonTextGood="Good"
        handleClickNeutral={() => setNeutral(neutral + 1)}
        buttonTextNeutral="Neutral"
        handleClickBad={() => setBad(bad + 1)}
        buttonTextBad="Bad"
      />
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </>
  );
}

export default App;
