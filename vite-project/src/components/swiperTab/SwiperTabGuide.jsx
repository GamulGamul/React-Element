import { createContext, useEffect, useState } from "react";
import JustTab from "./JustTab";
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

  const defaultData = data.map((el) =>
    el.reduce((acc, el) => {
      if (el.name) acc[el.name] = false;
      return acc;
    }, {})
  );

  const [isData, setIsData] = useState([]); //data
  const [tabIndex, setTabIndex] = useState(null); //tab

  const handleSetTabIndex = (index) => setTabIndex(index); //tab

  const handleReset = () => {
    //reset
    setTabIndex(null);
    setIsData(defaultData);
  };

  useEffect(() => {
    setIsData(data);
  }, []);

  useEffect(() => {
    //isData[0] 요금제,
    //isData[1] 데이터량,
    //isData[2] 통신망,
    //isData[3] 5G/LTE,
    //isData[4] 통신사,
    const trueItem = isData.map((items) => items.filter((item) => item.state));
    console.log({
      data: isData,
      selectTabData: isData[tabIndex] || null,
      trueItem,
    });
  }, [isData, tabIndex]);

  return (
    <>
      <button
        type="button"
        style={{ height: "70px", width: "100px", marginBottom: "20px" }}
        onClick={handleReset}
      >
        초기화 버튼
      </button>
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
