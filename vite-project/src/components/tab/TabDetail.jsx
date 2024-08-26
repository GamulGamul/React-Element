import { useEffect, useState } from "react";
import classnames from "classnames";

const TabList = ({ tabList, defaultIndex = 0 }) => {
  const [tabIndex, setTabIndex] = useState(defaultIndex);

  const tabActiveHandle = (index) => setTabIndex(index);

  useEffect(() => {
    console.log(tabIndex);
  }, [tabIndex]);

  return (
    <>
      <ul className="tab-list-wrap" role="tablist">
        {tabList.map((tab, index) => (
          <li
            key={tab.id}
            id={tab.id}
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
        {tabList.map((tab, index) => (
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
        ))}
      </div>
    </>
  );
};

export default TabList;
