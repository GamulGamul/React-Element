const RadioBox = (props) => {
  return (
    <div>
      {props.data.map((el) => (
        <label key={el.label}>
          <input type="checkbox" />
        </label>
      ))}
    </div>
  );
};
export default RadioBox;
