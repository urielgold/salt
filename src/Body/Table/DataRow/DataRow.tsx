import { RowData } from '../../../App.decl';
import { columns } from '../Table.config';
import styles from './DataRow.module.scss';

type DataRowProps = {
  data: RowData;
  path: string;
  hidden: boolean;
}

export const DataRow = ({ data, path, hidden }: DataRowProps) => (
  <tr className={`${styles.row} ${hidden ? styles.hidden : ''}`}>
    <td />
    {columns.map(c => (
      <td key={c.name}>{c?.render ? c.render(data, path) : data[c.name]}</td>
    ))}
  </tr>
);
