export type StatisticsLineProps = {
  text: string;
  value: number;
};

export function StatisticsLine(props: StatisticsLineProps) {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
}
