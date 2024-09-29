import { useEffect, useState } from "react";
import styled from "styled-components";
import ToggleButton from "../formButton/ToggleButton";

const StyleToastPopup = styled.div`
  input {
    width: 200px;
    background-color: gray;
  }
`;

const ToastPopup = ({ id, label, onText, offText, offTimer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const handleIsOpen = (isChecked) => {
    setIsOpen(true);
    setIsOn(isChecked);
    console.log("isOn : " + isChecked);
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, offTimer);
    }

    return () => clearTimeout(timer);
  }, [isOpen, offTimer, isOn]);

  return (
    <>
      <ToggleButton label={label} isOpen={handleIsOpen} />
      {isOpen && (
        <StyleToastPopup
          type="toggle"
          role="alertdialog"
          aria-live="assertive"
          aria-describedby={id}
        >
          <p id={id}>{isOn ? onText : offText}</p>
        </StyleToastPopup>
      )}
    </>
  );
};
export default ToastPopup;
