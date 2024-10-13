import { useContext, useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import { RateContext } from "./SwiperTabGuide";

const CheckBoxWrap = (props) => {
  const { tabIndex, isData, setIsData } = useContext(RateContext);

  const [isChecked, setIsChecked] = useState(isData);
  const handleInput = (e, name) => {
    setIsChecked((prev) => {
      const updateState = [...prev];
      updateState[tabIndex] = {
        ...updateState[tabIndex],
        [name]: e.target.checked,
      };
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
    <CheckBox
      {...props}
      tabIndex={tabIndex}
      isChecked={isChecked[tabIndex]}
      handleInput={handleInput}
    />
  );
};
export default CheckBoxWrap;