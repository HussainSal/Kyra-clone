import { useRouter } from "next/router";
import React, { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext<any>({
  activeTab: false,
  setActiveTab: null,
  width: null,
  setWidth: null,
  enableMenu: false,
  setEnableMenu: null,
});

export const AppWrapper: React.FC<{ children: any }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(false);
  const [width, setWidth] = useState<number>();
  const [enableMenu, setEnableMenu] = useState(false);


  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        width,
        setWidth,
        enableMenu,
        setEnableMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
