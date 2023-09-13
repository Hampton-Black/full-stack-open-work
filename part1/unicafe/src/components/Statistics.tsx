import { StatisticsLine } from "./StatisticsLine";

export function Statistics({ goodCount, neutralCount, badCount }) {
  const total = goodCount + neutralCount + badCount;
  const average = (goodCount * 1 + neutralCount * 0 + badCount * -1) / total;

  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text="Good counter" value={goodCount} />
          <StatisticsLine text="Neutral counter" value={neutralCount} />
          <StatisticsLine text="Bad counter" value={badCount} />
          <StatisticsLine text="Total" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine
            text="Positive Feedback"
            value={(goodCount / total) * 100 + ` %`}
          />
        </tbody>
      </table>
    </>
  );
}
