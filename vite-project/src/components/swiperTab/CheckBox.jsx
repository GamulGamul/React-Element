const CheckBox = (props) => {
  return (
    <div>
      {props.data[props.tabIndex]?.map((el, i) => (
        <label key={el.label}>
          <span>{el.label}</span>
          <input
            type="checkbox"
            checked={props.isChecked[i].state || false}
            onChange={(e) => props.handleInput(e, el.name)}
          />
        </label>
      ))}
    </div>
  );
};
export default CheckBox;
