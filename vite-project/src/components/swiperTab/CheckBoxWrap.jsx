import { useContext, useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import { RateContext } from "./SwiperTabGuide";

const CheckBoxWrap = (props) => {
  const { tabIndex, setIsData } = useContext(RateContext);

  const inputInitialChckedState = props.data.map((el) =>
    el.reduce((acc, el) => {
      if (el.name) acc[el.name] = false;
      return acc;
    }, {})
  );

  const [isChecked, setIsChecked] = useState(inputInitialChckedState);
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

  // useState(() => {
  //   setIsChecked(prev => [
  //     ...prev,
  //     isData,
  //   ]);
  // }, []);
  //   console.log([isChecked[tabIndex]]);

  useEffect(() => {
    if (setIsData)
      //   setIsData((prev) => ({ ...prev, [tabIndex]: isChecked[tabIndex] }));
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
