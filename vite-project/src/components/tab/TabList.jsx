const TabList = ({ tabs, ActiveTabs, setActiveTabs }) => {
  return (
    <ul className="tab-list-wrap" role="tablist">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          id={tab.id}
          className={`tab-list${tab.id === ActiveTabs ? " active" : ""}`}
          role="tab"
          aria-selected={tab.id === ActiveTabs}
          aria-controls={`${tab.id}-content`}
        >
          <button type="button" onClick={() => setActiveTabs(tab.id)}>
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TabList;
