import { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import styles from './BreadCrumbs.module.scss';

type BreadCrumbsProps = {
  path: string[];
}

export const BreadCrumbs = ({ path }: BreadCrumbsProps) => {
  const last = path[path.length - 1];
  const basePath = path.slice(0, -1);

  return (
    <div className={styles.wrapper}>
      {basePath.map(p => (
        <Fragment key={p}>
          <span className={styles.link}> {p} </span>
          <FontAwesomeIcon icon={faChevronRight} className={styles.chevron}/>
        </Fragment>
      ))}
      <span className={styles.leaf}> {last} </span>
    </div>
  )
}