import { RowData } from '../../../App.decl';
import { columns } from '../Table.config';

type DataRowProps = {
  data: RowData;
}

export const DataRow = ({ data }: DataRowProps) => (
  <tr>
    <td />
    {columns.map(c => (
      <td key={c.name}>{c?.render ? c.render(data) : data[c.name]}</td>
    ))}
  </tr>
);
