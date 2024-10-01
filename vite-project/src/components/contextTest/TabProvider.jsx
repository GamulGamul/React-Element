import { createContext, useState } from "react";

export const TabContext = createContext();

export function TabProvider({ children }) {
  const [selectedTab, setSelectedTab] = useState(false);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
}
