import { Button, ButtonProps } from "./Button";

export type FeedbackProps = {
  handleClickGood: ButtonProps["handleClick"];
  handleClickNeutral: ButtonProps["handleClick"];
  handleClickBad: ButtonProps["handleClick"];
  buttonTextGood: ButtonProps["buttonText"];
  buttonTextNeutral: ButtonProps["buttonText"];
  buttonTextBad: ButtonProps["buttonText"];
};

export function Feedback(props: FeedbackProps) {
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
