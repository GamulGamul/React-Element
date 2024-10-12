const RadioBox = (props) => {
  return (
    <div>
      {props.data.map((el) => (
        <label key={el.label}>
          <p>{el.label}</p>
          <input type="checkbox" />
        </label>
      ))}
    </div>
  );
};
export default RadioBox;
