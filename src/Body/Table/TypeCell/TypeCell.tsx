import { PropsWithChildren } from 'react';

import styles from './TypeCell.module.scss';


export const TypeCell = ({ children }: PropsWithChildren) => {

  return (
    <span className={styles.button}>
      {children}
    </span>
  );
};
