import React, { createContext, useState } from "react";
import JustTab from "./JustTab";
import CheckBox from "./CheckBox";
import RadioBox from "./RadioBox";
import { data } from "./data";
import CheckBoxWrap from "./CheckBoxWrap";
import RadioBoxWrap from "./RadioBoxWrap";

export const RateContext = createContext();

const SwiperTabGuide = () => {
  const tabData = [
    {
      title: "요금제",
      content: <CheckBoxWrap data={data} />,
    },
    {
      title: "데이터량",
      content: <CheckBoxWrap data={data} />,
    },
    {
      title: "통신망",
      content: <RadioBoxWrap data={data} />,
    },
    {
      title: "5G/LTE",
      content: <RadioBoxWrap data={data} />,
    },
    {
      title: "통신사",
      content: <CheckBoxWrap data={data} />,
    },
  ];

  const [tabIndex, setTabIndex] = useState(null); //tabIndex

  const [isData, setIsData] = useState([]);

  const handleSetTabIndex = (index) => setTabIndex(index); //tab
  const handleReset = () => setTabIndex(null); //reset

  console.log(isData);

  return (
    <>
      <RateContext.Provider value={{ tabIndex, isData, setIsData }}>
        <JustTab
          data={tabData}
          tabIndex={tabIndex}
          handleReset={handleReset}
          handleSetTabIndex={handleSetTabIndex}
          setIsData={setIsData}
        />
      </RateContext.Provider>
    </>
  );
};
export default SwiperTabGuide;
