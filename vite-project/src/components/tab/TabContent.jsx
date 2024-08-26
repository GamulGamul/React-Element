const TabContent = ({ tabs, ActiveTabs }) => {
  return (
    <div className="tab-content-wrap">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${tab.id}-content`}
          className={`tab-content${tab.id === ActiveTabs ? " active" : ""}`}
          role="tabpanel"
          aria-labelledby={tab.id}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default TabContent;
