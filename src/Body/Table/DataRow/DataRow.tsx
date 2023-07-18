import { RowData } from '../../../App.decl';
import { columns } from '../Table.config';

type DataRowProps = {
  data: RowData;
  path: string;
}

export const DataRow = ({ data, path }: DataRowProps) => (
  <tr>
    <td />
    {columns.map(c => (
      <td key={c.name}>{c?.render ? c.render(data, path) : data[c.name]}</td>
    ))}
  </tr>
);
