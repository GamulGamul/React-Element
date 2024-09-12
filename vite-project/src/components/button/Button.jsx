import classnames from "classnames";

import * as S from "../../style/ElementsStyle";

/**
 * btnType : icon (아이콘만 있는 타입) | default '', 스타일은 classname으로 지정
 */
const Button = ({
  btnType,
  className,
  as,
  to,
  target = "_self",
  label,
  disabled,
  onClick,
}) => {
  return as === "a" ? (
    <S.ButtonLink
      className={classnames("btn-basic", className, btnType, { disabled })}
      to={to}
      target={target}
    >
      <span>{label}</span>
    </S.ButtonLink>
  ) : (
    <S.Button
      type="button"
      className={classnames("btn-basic", className, btnType, { disabled })}
      disabled={disabled}
      onClick={onClick && onClick}
    >
      <span>{label}</span>
    </S.Button>
  );
};

export default Button;
