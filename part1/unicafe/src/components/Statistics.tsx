export function Statistics({ goodCount, neutralCount, badCount }) {
  const total = goodCount + neutralCount + badCount;

  return (
    <>
      <h1>Statistics</h1>
      <p>Good counter - {goodCount}</p>
      <p>Neutral counter - {neutralCount}</p>
      <p>Bad counter - {badCount}</p>
      <p>Total - {total}</p>
      <p>
        Average - {(goodCount * 1 + neutralCount * 0 + badCount * -1) / total}
      </p>
      <p>Positive Feedback - {(goodCount / total) * 100} %</p>
    </>
  );
}
