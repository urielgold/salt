import { PropsWithChildren, useMemo, useState } from 'react';

import { TabsContext, TabType } from './Tabs.context';

export const TabsProvider = ({ children }: PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState<TabType>('Request');

  const context = useMemo(() => ({
    activeTab,
    setActiveTab
  }), [activeTab, setActiveTab]);

return (
    <TabsContext.Provider value={context}>
      {children}
    </TabsContext.Provider>
  );
}
