import { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import classnames from "classnames";

const Select = ({ selectList }) => {
  const [option, SetOption] = useState(selectList[0].title);
  const [visibles, SetVisibles] = useState(false);
  const [selectIndex, SetSelectIndex] = useState(0);

  const selectRef = useRef();

  //select button
  const handleValueClick = () => {
    SetVisibles(!visibles);
  };

  //select option
  const handleOptionClick = (title, index) => {
    SetOption(title);
    SetVisibles(false);
    SetSelectIndex(index);
  };

  //select outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && e.target.contains(selectRef.current)) {
        SetVisibles(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.addEventListener("click", handleClickOutside);
  }, []);

  const Select = styled.div`
    width: 200px;
    button {
      width: 100%;
      background-color: transparent;
      border: 1px solid #888;
      padding: 20px 0;
      cursor: pointer;
    }

    .select-title {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 30%;
        width: 20px;
        height: 20px;
        background-color: red;
      }
      &.active::after {
        transform: rotate(45deg);
      }
    }

    .select-option {
      display: flex;
      flex-direction: column;

      .option-list {
        &.active {
          color: red;
        }
      }
    }
  `;

  return (
    <Select ref={selectRef}>
      <button
        type="button"
        className={classnames("select-title", { active: visibles })}
        onClick={handleValueClick}
      >
        {option}
      </button>
      {visibles && (
        <div className="select-option">
          {selectList.map((select, index) => {
            return (
              <button
                type="button"
                key={select.id}
                className={classnames("option-list", {
                  active: index === selectIndex,
                })}
                onClick={() => handleOptionClick(select.title, index)}
              >
                {select.title}
              </button>
            );
          })}
        </div>
      )}
    </Select>
  );
};

export default Select;
