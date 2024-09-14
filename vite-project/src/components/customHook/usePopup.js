import { useRef, useState, useCallback } from "react";

export default function usePopup() {
  const [popOpen, setPopOpen] = useState(false);
  const focusButton = useRef(null);

  const handlePopupOpen = useCallback((state, e) => {
    const didMount = (state) => {
      const $body = document.querySelector("body");
      if (!state && focusButton.current === undefined) {
        $body.setAttribute("tabindex", "0");
        $body.focus();
      }
    };

    const click = (state, e) =>
      state ? (focusButton.current = e?.target) : focusButton.current?.focus();

    const handleFocus = (state, e) => {
      didMount(state);
      click(state, e);
    };

    setPopOpen(state);
    handleFocus(state, e);
  }, []);

  return [popOpen, handlePopupOpen];
}
