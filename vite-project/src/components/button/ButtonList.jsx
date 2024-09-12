import * as S from "../../style/ElementsStyle";
import Button from "../elements/Button";

const ButtonList = ({ ulClass, col, alignCenter, buttonList }) => {
  return (
    <S.ButtonList className={ulClass} col={col} alignCenter={alignCenter}>
      {buttonList.map((btn, index) => {
        return (
          <Button
            key={btn.label}
            label={btn.label}
            as={btn.as}
            to={btn.to}
            className={btn.className}
            onClick={btn.onClick}
            target={btn.target}
            disabled={btn.disabled}
            btnType={btn.btnType}
          ></Button>
        );
      })}
    </S.ButtonList>
  );
};

export default ButtonList;
