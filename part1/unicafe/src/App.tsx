import { useState } from "react";
import "./App.css";
import { Feedback } from "./components/Feedback";
import { Statistics } from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackGiven = good !== 0 || neutral !== 0 || bad !== 0;

  return (
    <>
      <h1>Give Feedback</h1>
      <Feedback
        handleClickGood={() => setGood(good + 1)}
        buttonTextGood="Good"
        handleClickNeutral={() => setNeutral(neutral + 1)}
        buttonTextNeutral="Neutral"
        handleClickBad={() => setBad(bad + 1)}
        buttonTextBad="Bad"
      />
      <h1>Statistics</h1>
      {feedbackGiven ? (
        <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
      ) : (
        <p>No Feedback provided yet</p>
      )}
    </>
  );
}

export default App;
