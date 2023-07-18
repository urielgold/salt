import styles from './Body.module.scss';
import { SearchBar } from './SearchBar/SearchBar';
import { Table } from './Table/Table';
import { useApiData } from '../context/ApiData/ApiData.context';
import { useActiveTab } from '../context/Tabs/Tabs.context';
import { useEffect, useState } from 'react';
import {RequestResponseType} from '../App.decl';

export type Filter = {
  text?: string;
  onlyPII?: boolean;
};

export const Body = () => {
  const [filter, setFilter] = useState<Filter>({});
  const { data } = useApiData();
  const { activeTab } = useActiveTab();

  const type: RequestResponseType = activeTab === 'Request' ? 'request' : 'response';

  useEffect(() => {
    setFilter({});
  }, [type, setFilter]);

  return (
    <div className={styles.body} key={type}>
      <SearchBar setFilter={setFilter} />
      <Table data={data[type]} filter={filter} path={type}/>
    </div>
  );
};
