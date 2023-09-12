import { useState } from "react";
import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h1>Statistics</h1>
      <p>Good counter - {good}</p>
      <p>Neutral counter - {neutral}</p>
      <p>Bad counter - {bad}</p>
    </>
  );
}

export default App;
