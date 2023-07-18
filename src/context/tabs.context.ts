import { createContext, useContext } from 'react';

export const TabProvider = createContext({});

const useData = () => useContext(DataProvider);