import {createContext, useContext} from 'react';

import { APIConfig } from '../../App.decl';

export type ApiDataType = {
  data: APIConfig;
}

export const ApiDataContext = createContext<ApiDataType>({ data: {} as APIConfig });

export const useApiData = () => useContext(ApiDataContext);