import classnames from "classnames";

/**
 * type : switch (토글스위치 타입)
 */
const Checkbox = ({
  type,
  id,
  value,
  checkError,
  defaultChecked,
  checked,
  disabled,
  callback,
  children,
  hiddenLabel = false,
  alert,
  helper,
}) => {
  return (
    <div
      className={classnames("box-checkbox", { error: checkError })}
      type={type}
      disabled={disabled}
    >
      <label>
        <input
          type="checkbox"
          value={value}
          data-id={id}
          defaultChecked={defaultChecked}
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
            callback && callback(e);
          }}
        />
        <span className="txt-label">
          <i className="icon"></i>
          <em className={classnames("label", { hidden: hiddenLabel })}>
            {children}
          </em>
        </span>
      </label>

      {helper && <div className="alert-text">{alert}</div>}
    </div>
  );
};

export default Checkbox;
