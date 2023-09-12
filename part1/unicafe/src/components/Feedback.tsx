export function Feedback(props) {
  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={props.handleClickGood}>{props.buttonTextGood}</button>
      <button onClick={props.handleClickNeutral}>
        {props.buttonTextNeutral}
      </button>
      <button onClick={props.handleClickBad}>{props.buttonTextBad}</button>
    </>
  );
}
