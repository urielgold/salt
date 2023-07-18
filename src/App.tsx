import { Header } from './Header/Header';
import { Tabs } from './Tabs/Tabs';
import { Body } from './Body/Body';
import { ApiDataProvider } from './context/ApiData/ApiDataProvider';
import { TabsProvider } from './context/Tabs/TabsProvider';

export const App = () => (
  <ApiDataProvider>
    <TabsProvider>
      <div>
        <Header title='GET /v1/balance/history'/>
        <Tabs/>
        <Body/>
      </div>
    </TabsProvider>
  </ApiDataProvider>
);

export default App
