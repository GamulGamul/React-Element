import { useEffect, useState } from "react";

const useInput = ({ tabIndex, setIsData, isData, type }) => {
  const [isChecked, setIsChecked] = useState(isData);

  const handleInputChecked = (e, name) => {
    if (type === "checkbox") {
      setIsChecked((prev) => {
        const updateState = [...prev];
        updateState[tabIndex] = updateState[tabIndex].map((el) =>
          el.name === name ? { ...el, state: e.target.checked } : el
        );
        return updateState;
      });
    }
    if (type === "radio") {
      setIsChecked((prev) => {
        const updateState = [...prev];
        updateState[tabIndex] = updateState[tabIndex].map((el) => {
          // 선택된 라디오 버튼만 true로 설정, 나머지는 false
          return el.name === name
            ? { ...el, state: true }
            : { ...el, state: false };
        });
        return updateState;
      });
    }
  };

  //최종상태로 업데이트
  useEffect(() => {
    if (setIsData && isChecked)
      setIsData((prev) => {
        const updateState = [...prev];
        updateState[tabIndex] = isChecked[tabIndex];
        return updateState;
      });
  }, [isChecked, setIsData, tabIndex]);

  return [isChecked, handleInputChecked];
};
export default useInput;
