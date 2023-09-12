export function Statistics({ goodCount, neutralCount, badCount }) {
  return (
    <>
      <h1>Statistics</h1>
      <p>Good counter - {goodCount}</p>
      <p>Neutral counter - {neutralCount}</p>
      <p>Bad counter - {badCount}</p>
    </>
  );
}
