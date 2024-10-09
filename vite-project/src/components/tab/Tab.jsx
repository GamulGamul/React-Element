import { useState, useEffect } from "react";
import classnames from "classnames";
import styled from "@emotion/styled";

const Tab = ({ tabList, defaultIndex = 0 }) => {
  const [tabIndex, setTabIndex] = useState(defaultIndex);

  const tabActiveHandle = (index) => setTabIndex(index);

  const Tab = styled.div`
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

  return (
    <Tab>
      <ul className="tab-list-wrap" role="tablist">
        {tabList.map((tab, index) => (
          <li
            key={tab.id}
            className={classnames("tab-list", { active: index === tabIndex })}
            role="tab"
            aria-selected={index === tabIndex}
            aria-controls={`${index}-content`}
          >
            <button type="button" onClick={() => tabActiveHandle(index)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content-wrap">
        {tabList[tabIndex].content}
        {/* {tabList.map((tab, index) => (
          <div
            key={tab.id}
            id={`${tab.id}-content`}
            className={classnames("tab-content", {
              active: index === tabIndex,
            })}
            role="tabpanel"
            aria-labelledby={tab.id}
          >
            {tab.content}
          </div>
        ))} */}
      </div>
    </Tab>
  );
};

export default Tab;
