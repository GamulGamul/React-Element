import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ToggleButton from "../formButton/ToggleButton";
import CopyButton from "../formButton/CopyButton";

const StyleToastPopupWrap = styled.div`
  position: relative;

  .toast-popup {
    visibility: hidden;
    z-index: 10;
    position: absolute;
    left: 0;
    top: calc(100% + 8px);
    opacity: 0;
    padding: 10px 20px;
    background-color: gray;

    &.fade-in {
      visibility: visible;
      opacity: 1;
      transition: opacity 1s ease-in-out, visibility 0s ease-in-out 0.1s;
    }

    &.fade-out {
      visibility: hidden;
      opacity: 0;
      transition: opacity 1s ease-in-out, visibility 0s ease-in-out 1s;
    }
  }
`;

const ToastPopupCopy = ({ id, label, offTimer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    let timer;

    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, offTimer);
    }

    return () => clearTimeout(timer);
  }, [isOpen, offTimer]);

  return (
    <StyleToastPopupWrap>
      <CopyButton label={label} isOpen={handleIsOpen} />
      <div
        className={`toast-popup ${isOpen ? "fade-in" : "fade-out"}`}
        type="toggle"
        role="alertdialog"
        aria-live="assertive"
        aria-describedby={id}
        aria-hidden={isOpen}
      >
        <p id={id}>복사했습니다.</p>
      </div>
    </StyleToastPopupWrap>
  );
};
export default ToastPopupCopy;
