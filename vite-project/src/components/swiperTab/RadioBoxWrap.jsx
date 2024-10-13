import { useContext } from "react";
import { RateContext } from "./SwiperTabGuide";
import RadioBox from "./RadioBox";
import useInput from "./useInput";

const RadioBoxWrap = (props) => {
  const { tabIndex, isData, setIsData } = useContext(RateContext);
  const [isChecked, handleInputChecked] = useInput({
    tabIndex,
    setIsData,
    isData,
    type: "radio",
  });

  return (
    <RadioBox
      {...props}
      tabIndex={tabIndex}
      isChecked={isChecked[tabIndex]}
      handleInputChecked={handleInputChecked}
    />
  );
};
export default RadioBoxWrap;
