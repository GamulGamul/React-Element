import { useContext, useEffect, useState } from "react";
import { RateContext } from "./SwiperTabGuide";
import RadioBox from "./RadioBox";

const RadioBoxWrap = (props) => {
  const { tabIndex, isData, setIsData } = useContext(RateContext);

  const [isChecked, setIsChecked] = useState(isData);
  const handleInput = (e, name) => {
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
