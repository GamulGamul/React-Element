import { useRef, useState } from "react";
import styled from "styled-components";
import useToggleState from "../customHook/useToggleState";

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

const ToggleButton = ({ label, isOpen }) => {
  const isChecked = useRef(false);

  return (
    <StyleToggleButton>
      <div className="toast--btn">
        <span>{label}</span>
        <button
          type="button"
          className={isChecked.current ? "checked" : ""}
          onClick={() => {
            isOpen && isOpen((isChecked.current = !isChecked.current));
          }}
        ></button>
      </div>
    </StyleToggleButton>
  );
};
export default ToggleButton;
