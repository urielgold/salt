import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Searchbar.module.scss';
import { Filter } from '../Body';

type SearchBarProps = {
  setFilter: (val: Filter) => void;
}

export const SearchBar = ({ setFilter }: SearchBarProps) => {
  const [text, setText] = useState<string>('');
  const [onlyPII, setOnlyPII] = useState<boolean>(false);

  const handleOnApply = () => setFilter({ text, onlyPII });

  const handleOnReset = () => {
    setText('');
    setOnlyPII(false);
    setFilter({});
  }

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchInput}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} color='#7d3ce9'/>
        <input placeholder='Search' onChange={e => setText(e.target.value)} value={text}/>
        <div className={classNames(styles.pFilter, {[styles.onlyPII]: onlyPII})}>
          <input type='checkbox' onChange={() => setOnlyPII(!onlyPII)} checked={onlyPII}/>
          Show PII Only
        </div>
      </div>
      <div>
        <button className={`${styles.apply} ${styles.button}`} onClick={handleOnApply}>
          Apply Filters
        </button>
        <button className={`${styles.reset} ${styles.button}`} onClick={handleOnReset}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}