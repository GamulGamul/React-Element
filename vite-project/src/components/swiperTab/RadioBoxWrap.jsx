import { useContext, useEffect, useState } from "react";
import { RateContext } from "./SwiperTabGuide";
import RadioBox from "./RadioBox";

const RadioBoxWrap = (props) => {
  const { tabIndex, isData, setIsData } = useContext(RateContext);

  const [isChecked, setIsChecked] = useState(isData);
  const handleInput = (e, name) => {
    setIsChecked((prev) => {
      const updateState = [...prev];
      updateState[tabIndex] = Object.keys(updateState[tabIndex]).reduce(
        (acc, key) => {
          acc[key] = key === name; // 선택된 라디오 버튼만 true로 설정
          return acc;
        },
        {}
      );
      return updateState;
    });
  };

  useEffect(() => {
    if (setIsData && isChecked)
      setIsData((prev) => {
        const updateState = [...prev];
        updateState[tabIndex] = isChecked[tabIndex];
        return updateState;
      });
  }, [isChecked, setIsData, tabIndex]);

  return (
    <RadioBox
      {...props}
      tabIndex={tabIndex}
      isChecked={isChecked[tabIndex]}
      handleInput={handleInput}
    />
  );
};
export default RadioBoxWrap;
