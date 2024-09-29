import { useState } from "react";

export default function useToggleState() {
  const [isState, setIsState] = useState(false);

  const handleChecked = () => {
    setIsState(!isState);
  };
  return [isState, handleChecked];
}
