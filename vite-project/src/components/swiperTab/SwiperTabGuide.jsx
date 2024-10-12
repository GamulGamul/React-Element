import { useState } from "react";
import SwiperTab from "./SwiperTab";
import JustTab from "./JustTab";

const SwiperTabGuide = () => {
  const tabData = [
    {
      title: "텝1",
      content: "11",
    },
    {
      title: "텝2",
      content: "22",
    },
    {
      title: "텝3",
      content: "33",
    },
    {
      title: "텝4",
      content: "44",
    },
    {
      title: "텝5",
      content: "55",
    },
    {
      title: "텝6",
      content: "66",
    },
    {
      title: "텝7",
      content: "77",
    },
    {
      title: "텝8",
      content: "88",
    },
  ];

  const [tabIndex, setTabIndex] = useState();

  return (
    <>
      <JustTab data={tabData} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <SwiperTab data={tabData} tabIndex={tabIndex} setTabIndex={setTabIndex} />
    </>
  );
};
export default SwiperTabGuide;
