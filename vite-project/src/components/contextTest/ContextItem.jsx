import { useContext } from "react";
import { TabContext } from "./TabProvider";

const ContextItem = () => {
  const { selectedTab } = useContext(TabContext);
  return <div>{console.log(selectedTab)}</div>;
};
export default ContextItem;
