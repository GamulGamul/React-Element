import { useRef, useState } from "react";
import styled from "styled-components";

const StyleToggleButton = styled.div`
  button {
    display: flex;
    background-color: blue;
    width: 150px;
    height: 50px;
    &::after {
      content: "";
      width: 50px;
      height: 50px;
      background-color: lightgray;
      transition: transform 0.5s ease;
      transform: translateX(0);
    }
    &.checked::after {
      transform: translateX(100px);
    }
  }
`;

const ToggleButtonInput = ({ label, isOpen }) => {
  //   const isChecked = useRef(false);

  return (
    <StyleToggleButton>
      <div className="toast--btn">
        <label>
          <span>{label}</span>
          <input
            type="checkbox"
            onChange={(e) => isOpen(e)}
            // className={isChecked.current ? "checked" : ""}
            // onChange={() => {
            //   isOpen && isOpen((isChecked.current = !isChecked.current));
            // }}
          />
        </label>
      </div>
    </StyleToggleButton>
  );
};
export default ToggleButtonInput;
