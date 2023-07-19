import { PropsWithChildren } from 'react';
import set from 'lodash.set';

import { useApiData } from '../../../context/ApiData/ApiData.context';
import styles from './Tag.module.scss';


type TagProps = {
  value?: boolean;
  variant: 'pii' | 'masking' | 'type';
  path: string;
};

export const Tag = ({ value, variant, children, path }: PropsWithChildren<TagProps>) => {
  const { setData } = useApiData();

  const handleOnClick = () => {
    setData(data => {
      const clonedData = structuredClone(data);
      set(clonedData, path, !value);
      return clonedData;
    })
  };

  const outlineStyle = value ? styles.regular : styles.outline;

  return (
    <span className={`${styles.button} ${outlineStyle} ${styles[variant]}`} onClick={handleOnClick}>
      {children}
    </span>
  );
};
