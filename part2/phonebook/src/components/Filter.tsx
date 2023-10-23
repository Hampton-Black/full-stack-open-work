import { ChangeEventHandler } from "react";

export const Filter = (props: {
  filterString: string | number | readonly string[] | undefined;
  filterNames: ChangeEventHandler<HTMLInputElement> | undefined;
}) => {
  return (
    <div className="form-container">
      <div>
        Filter with:{" "}
        <input
          type="text"
          value={props.filterString}
          onChange={props.filterNames}
        />
      </div>
    </div>
  );
};
