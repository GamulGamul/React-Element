import { useState } from "react";
import JustTab from "./JustTab";
import CheckBox from "./CheckBox";
import RadioBox from "./RadioBox";
import { paymentSystemData } from "./data";

const SwiperTabGuide = () => {
  const tabData = [
    {
      title: "요금제",
      content: <CheckBox data={paymentSystemData} />,
    },
    // {
    //   title: "데이터량",
    //   content: <RadioBox />,
    // },
    // {
    //   title: "통신망",
    //   content: <RadioBox />,
    // },
    // {
    //   title: "5G/LTE",
    //   content: <RadioBox />,
    // },
    // {
    //   title: "통신사",
    //   content: <CheckBox />,
    // },
  ];

  const [tabIndex, setTabIndex] = useState(null); // tabIndex

  const handleSetTabIndex = (index) => setTabIndex(index); //tab
  const handleReset = () => setTabIndex(null); //reset

  return (
    <>
      <JustTab
        data={tabData}
        tabIndex={tabIndex}
        handleReset={handleReset}
        handleSetTabIndex={handleSetTabIndex}
      />
    </>
  );
};
export default SwiperTabGuide;
