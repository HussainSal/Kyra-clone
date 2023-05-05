import { useRouter } from "next/router";
import React, { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext<any>({
  activeTab: false,
  setActiveTab: null,
  disableAudio: false,
  setDisableAudio: null,
  enableMenu: false,
  setEnableMenu: null,
});

export const AppWrapper: React.FC<{ children: any }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(false);
  const [disableAudio, setDisableAudio] = useState(false);
  const [enableMenu, setEnableMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        disableAudio,
        setDisableAudio,
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
