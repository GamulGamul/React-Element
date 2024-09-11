import classnames from "classnames";

const Radio = ({
  type = "radio",
  color,
  radioError,
  id,
  name,
  defaultChecked,
  checked,
  disabled,
  children,
  hiddenLabel = false,
  onChange = () => {},
  alert,
  helper,
}) => {
  return (
    <div
      className={classnames("box-radio", { error: radioError })}
      color={color}
      type={type}
    >
      <label>
        <input
          type="radio"
          id={id}
          name={name}
          defaultChecked={defaultChecked}
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
            onChange(e.target.id);
          }}
        />
        <span className="txt-label">
          <i className="icon"></i>
          <em className={`label ${hiddenLabel ? "hidden" : ""}`}>{children}</em>
        </span>
      </label>
      {helper && <div className="alert-text">{alert}</div>}
    </div>
  );
};

export default Radio;
