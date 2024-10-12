import SwiperTab from "./SwiperTab";

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

  return (
    <>
      <SwiperTab data={tabData} />
      <SwiperTab data={tabData} />
    </>
  );
};
export default SwiperTabGuide;
