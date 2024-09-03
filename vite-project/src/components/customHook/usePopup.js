import { useState } from "react";

export default function usePopup() {
  const [popOpen, setPopOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopOpen(!popOpen);
  };

  return [popOpen, handlePopupOpen];
}
