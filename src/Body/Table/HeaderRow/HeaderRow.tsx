import styles from '../Table.module.scss';
import {columns} from '../Table.config';

export const HeaderRow = () => (
  <thead>
    <tr>
      <th/>
      {columns.map((c, index) =>
        <th key={c.name}>
          {!!index && <span className={styles.separator}/>}
          {c.displayName}
        </th>)}
    </tr>
  </thead>
);