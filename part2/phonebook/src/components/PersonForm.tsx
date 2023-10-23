import { FormEventHandler } from "react";

export const PersonForm = (props: {
  addName: FormEventHandler<HTMLFormElement> | undefined;
  newName: string | number | readonly string[] | undefined;
  setNewName: (arg0: string) => void;
  newNumber: string | number | readonly string[] | undefined;
  setNewNumber: (arg0: string) => void;
}) => {
  return (
    <form className="form-container" onSubmit={props.addName}>
      <div>
        Name:{" "}
        <input
          value={props.newName}
          onChange={(event) => props.setNewName(event.target.value)}
        />
      </div>
      <div>
        Number:{" "}
        <input
          value={props.newNumber}
          onChange={(event) => props.setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
