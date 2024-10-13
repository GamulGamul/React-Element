import { useContext } from "react";
import CheckBox from "./CheckBox";
import { RateContext } from "./SwiperTabGuide";
import useInput from "./useInput";

const CheckBoxWrap = (props) => {
  const { tabIndex, isData, setIsData } = useContext(RateContext);
  const [isChecked, handleInputChecked] = useInput({
    tabIndex,
    setIsData,
    isData,
    type: "checkbox",
  });

  return (
    <>
      {/* {console.log(isChecked)} */}
      <CheckBox
        {...props}
        tabIndex={tabIndex}
        isChecked={isChecked[tabIndex]}
        handleInputChecked={handleInputChecked}
      />
    </>
  );
};
export default CheckBoxWrap;
