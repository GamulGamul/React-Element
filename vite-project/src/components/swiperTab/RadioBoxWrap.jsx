import { useContext, useEffect, useState } from "react";
import { RateContext } from "./SwiperTabGuide";
import RadioBox from "./RadioBox";

const RadioBoxWrap = (props) => {
  const { tabIndex, isData, setIsData } = useContext(RateContext);

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

  //   useState(() => {
  //     setIsChecked(prev => );
  //   }, []);

  useEffect(() => {
    if (setIsData)
      setIsData((prev) => ({ ...prev, [tabIndex]: isChecked[tabIndex] }));
  }, [isChecked, setIsData, tabIndex]);

  return (
    <RadioBox
      {...props}
      tabIndex={tabIndex}
      isChecked={isChecked}
      handleInput={handleInput}
    />
  );
};
export default RadioBoxWrap;
