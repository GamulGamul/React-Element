// import { TabWraper } from "./TabsCss.js";
import Tab from "./Tab.jsx";
// import TabContent from "./TabContent.jsx";

const tabList = [
  {
    id: "tab1",
    title: "첫번째",
    content: "Content 1",
  },
  {
    id: "tab2",
    title: "두번째",
    content: "Content 2",
  },
  {
    id: "tab3",
    title: "세번째",
    content: "Content 3",
  },
];

const TabData = () => {
  return (
    <>
      <Tab tabList={tabList} />
    </>
  );
};
export default TabData;
