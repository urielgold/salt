import {PropsWithChildren, useState} from 'react';

import { ApiDataContext } from './ApiData.context';
import backendData from '../../../fe_data.json';
import {APIConfig} from '../../App.decl';

export const ApiDataProvider = ({children}: PropsWithChildren) => {
    const [data, setData] = useState<APIConfig>(backendData);

    return (
      <ApiDataContext.Provider value={{ data, setData }}>
          {children}
      </ApiDataContext.Provider>
    );
}
