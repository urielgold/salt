import classNames from 'classnames';

import styles from './Tabs.module.scss';
import {TabType, useActiveTab} from '../context/Tabs/Tabs.context';

export const Tab = ({ title }: { title: TabType }) => {
  const { activeTab, setActiveTab } = useActiveTab();

  return (
  <div className={classNames(styles.tab, { [styles.active]: activeTab === title })}
    onClick={() => setActiveTab(title)}>
    {title}
  </div>
  );
};


export const Tabs = () => (
  <div className={styles.tabs}>
    <Tab title='Request'/>
    <Tab title='Response'/>
  </div>
);