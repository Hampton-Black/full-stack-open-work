export type ButtonProps = {
  buttonText: string;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export function Button(props: ButtonProps) {
  return <button onClick={props.handleClick}>{props.buttonText}</button>;
}
