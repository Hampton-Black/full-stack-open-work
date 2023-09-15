export const Filter = (props) => {
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
