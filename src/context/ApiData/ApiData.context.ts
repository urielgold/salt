import {createContext, useContext, Dispatch, SetStateAction} from 'react';

import { APIConfig } from '../../App.decl';

export type ApiDataType = {
  data: APIConfig;
  setData: Dispatch<SetStateAction<APIConfig>>;
}

export const ApiDataContext = createContext<ApiDataType>({
  data: {} as APIConfig,
  setData: (() => null)
});

export const useApiData = () => useContext(ApiDataContext);