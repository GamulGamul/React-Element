const RadioBox = (props) => {
  return (
    <div>
      {props.data[props.tabIndex]?.map((el) => (
        <label key={el.label}>
          <span>{el.label}</span>
          <input
            type="checkbox"
            checked={props.isChecked[props.tabIndex][el.name] || false}
            onChange={(e) => props.handleInput(e, el.name)}
          />
        </label>
      ))}
    </div>
  );
};
export default RadioBox;
