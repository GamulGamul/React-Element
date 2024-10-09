import { useContext } from "react";
import { TabContext } from "./TabProvider";

const ContextItem = () => {
  const { selectedTab } = useContext(TabContext);
  return <div>11</div>;
};
export default ContextItem;
