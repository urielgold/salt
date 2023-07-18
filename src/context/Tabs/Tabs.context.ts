import { createContext, useContext } from 'react';

export type TabType = 'Request' | 'Response';

type contextType = {
  activeTab: TabType;
  setActiveTab: (str: TabType) => void;
};

export const TabsContext = createContext<contextType>({ activeTab: 'Request', setActiveTab: () => null});

export const useActiveTab = () => useContext(TabsContext);