import styles from './Tag.module.scss';
import { PropsWithChildren, useState } from 'react';

type TagProps = {
  outline?: boolean;
  variant: 'pii' | 'masking' | 'type';
};

export const Tag = ({ outline, variant, children }: PropsWithChildren<TagProps>) => {
  const [active, setActive] = useState<boolean | undefined>(outline);

  const handleOnClick = () => setActive(!active);

  const outlineStyle = active ? styles.outline : styles.regular;

  return (
    <span className={`${styles.button} ${outlineStyle} ${styles[variant]}`} onClick={handleOnClick}>
      {children}
    </span>
  );
};
