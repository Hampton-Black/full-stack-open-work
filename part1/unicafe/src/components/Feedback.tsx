import { Button } from "./Button";

export function Feedback(props) {
  return (
    <>
      <Button
        handleClick={props.handleClickGood}
        buttonText={props.buttonTextGood}
      />
      <Button
        handleClick={props.handleClickNeutral}
        buttonText={props.buttonTextNeutral}
      />
      <Button
        handleClick={props.handleClickBad}
        buttonText={props.buttonTextBad}
      />
    </>
  );
}
