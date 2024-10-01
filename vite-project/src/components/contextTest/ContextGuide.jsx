import { createContext, useState } from "react";
import ContextButton from "./ContextButton";
import ContextItem from "./contextItem";
import { TabProvider } from "./TabProvider";

// export const TabContext = createContext();

// export default function ContextGuide() {
//   const [selectedTab, setSelectedTab] = useState(false);

//   return (
//     <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
//       <ContextButton />
//       <ContextItem />
//     </TabContext.Provider>
//   );
// }

export default function ContextGuide() {
  return (
    <TabProvider>
      <ContextButton />
      <ContextItem />
    </TabProvider>
  );
}
