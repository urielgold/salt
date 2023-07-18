import { PropsWithChildren } from 'react';

import { ApiDataContext } from './ApiData.context';
import backendData from '../../../fe_data.json';

export const ApiDataProvider = ({children}: PropsWithChildren) => (
    <ApiDataContext.Provider value={{ data: backendData}}>
      {children}
    </ApiDataContext.Provider>
);
