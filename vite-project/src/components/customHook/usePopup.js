import { useRef, useState } from "react";

export default function usePopup() {
  const [popOpen, setPopOpen] = useState(false);
  const focusButton = useRef(null);

  const handleFocus = (state, e) => {
    state ? (focusButton.current = e.target) : focusButton.current.focus();
  };

  const handlePopupOpen = (state, e) => {
    setPopOpen(state);
    handleFocus(state, e);
  };

  return [popOpen, handlePopupOpen];
}
