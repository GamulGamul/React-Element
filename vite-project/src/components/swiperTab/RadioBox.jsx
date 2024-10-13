const RadioBox = (props) => {
  return (
    <div>
      {props.data[props.tabIndex]?.map((el, i) => (
        <label key={el.label}>
          <span>{el.label}</span>
          <input
            type="radio"
            checked={props.isChecked[i].state || false}
            onChange={(e) => props.handleInputChecked(e, el.name)}
            name={`radio-data-${props.tabIndex}`}
          />
        </label>
      ))}
    </div>
  );
};
export default RadioBox;
