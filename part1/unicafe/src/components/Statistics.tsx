import { StatisticsLine, StatisticsLineProps } from "./StatisticsLine";

export type StatisticsProps = {
  goodCount: StatisticsLineProps["value"];
  neutralCount: StatisticsLineProps["value"];
  badCount: StatisticsLineProps["value"];
};

export function Statistics(props: StatisticsProps) {
  const total = props.goodCount + props.neutralCount + props.badCount;
  const average =
    (props.goodCount * 1 + props.neutralCount * 0 + props.badCount * -1) /
    total;

  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text="Good counter" value={props.goodCount} />
          <StatisticsLine text="Neutral counter" value={props.neutralCount} />
          <StatisticsLine text="Bad counter" value={props.badCount} />
          <StatisticsLine text="Total" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine
            text="Positive Feedback (%)"
            value={(props.goodCount / total) * 100}
          />
        </tbody>
      </table>
    </>
  );
}
