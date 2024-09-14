import { useRef, useState, useCallback } from "react";

export default function usePopup() {
  const [popOpen, setPopOpen] = useState(false);
  const focusButton = useRef(null);

  const handlePopupOpen = useCallback((state, e) => {
    const didMount = (state, target) => {
      const $target = document.querySelector(target);
      if (!state && focusButton.current === undefined) {
        $target.setAttribute("tabindex", "0");
        $target.focus();
      }
    };

    const btnClick = (state, e) =>
      state ? (focusButton.current = e?.target) : focusButton.current?.focus();

    const popFocus = (state, e) => {
      didMount(state, "body");
      btnClick(state, e);
    };

    setPopOpen(state);
    popFocus(state, e);
  }, []);

  return [popOpen, handlePopupOpen];
}
