import { useRef, useState, useCallback } from "react";

export default function usePopup() {
  const [popOpen, setPopOpen] = useState(false);
  const focusButton = useRef(null);

  const handleDidMountPopFocus = (state) => {
    const $body = document.querySelector("body");
    if (!state && focusButton.current === undefined) {
      $body.setAttribute("tabindex", "0");
      $body.focus();
    }
  };

  const handleClickFocus = (state, e) =>
    state ? (focusButton.current = e?.target) : focusButton.current?.focus();

  const handleFocus = (state, e) => {
    handleDidMountPopFocus(state);
    handleClickFocus(state, e);
  };

  const handlePopupOpen = useCallback((state, e) => {
    setPopOpen(state);
    handleFocus(state, e);
  }, []);

  return [popOpen, handlePopupOpen];
}
