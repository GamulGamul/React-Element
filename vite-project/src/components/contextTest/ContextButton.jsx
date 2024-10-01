import { useContext } from "react";
import { TabContext } from "./TabProvider";

const ContextButton = () => {
  const { selectedTab, setSelectedTab } = useContext(TabContext);

  return (
    <button type="button" onClick={() => setSelectedTab(!selectedTab)}>
      버튼
    </button>
  );
};
export default ContextButton;
