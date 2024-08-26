// import { TabWraper } from "./TabsCss.js";
import TabDetail from "./TabDetail.jsx";
// import TabContent from "./TabContent.jsx";
import styled from "@emotion/styled";

const TabWraper = styled.div`
  color: #222;

  .tab-list-wrap {
    display: flex;
    .tab-list {
      &.active {
        button {
          background-color: red;
        }
      }
    }
  }

  .tab-content-wrap {
    .tab-content {
      display: none;
      &.active {
        display: block;
      }
    }
  }
`;

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

const Tab = () => {
  return (
    <TabWraper>
      <TabDetail tabList={tabList} />
    </TabWraper>
  );
};
export default Tab;
