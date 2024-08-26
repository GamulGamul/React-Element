import { useState } from "react";
// import { TabWraper } from "./TabsCss.js";
import TabList from "./TabList.jsx";
import TabContent from "./TabContent.jsx";
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

const tabs = [
  {
    id: "tab1",
    label: "Tab 1",
    content: "Content 1",
  },
  {
    id: "tab2",
    label: "Tab 2",
    content: "Content 2",
  },
  {
    id: "tab3",
    label: "Tab 3",
    content: "Content 3",
  },
];

const Tabs = () => {
  const [ActiveTabs, setActiveTabs] = useState(tabs[0].id);

  return (
    <TabWraper>
      <TabList
        tabs={tabs}
        ActiveTabs={ActiveTabs}
        setActiveTabs={setActiveTabs}
      />
      <TabContent tabs={tabs} ActiveTabs={ActiveTabs} />
    </TabWraper>
  );
};
export default Tabs;
