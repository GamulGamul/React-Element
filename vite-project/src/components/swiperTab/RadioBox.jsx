const RadioBox = (props) => {
  return (
    <div>
      {props.data[props.tabIndex]?.map((el) => (
        <label key={el.label}>
          <span>{el.label}</span>
          <input
            type="radio"
            checked={props.isChecked[el.name] || false}
            onChange={(e) => props.handleInput(e, el.name)}
            name={`radio-data-${props.tabIndex}`}
          />
        </label>
      ))}
    </div>
  );
};
export default RadioBox;
