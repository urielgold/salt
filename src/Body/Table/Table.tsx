import { HeaderRow } from './HeaderRow/HeaderRow';
import styles from './Table.module.scss';
import { requestGroups, responseGroups } from './Table.config';
import { Section } from './Section/Section';
import { Request, Response } from '../../App.decl';
import { Filter } from '../Body';

type TableProps = {
  data: Request | Response;
  filter: Filter;
};

const isRequest = (data: Request | Response): data is Request =>
  !!((data as Request).urlParams || (data as Request).queryParams);

export const Table = ({ data, filter }: TableProps) => (
  <div className={styles.wrapper}>
    <table className={styles.table}>
      <HeaderRow />
      <tbody>
        {isRequest(data)
          ? requestGroups.map(g => (
              <Section key={g.label} title={g.label} data={data[g.field]} filter={filter} />
            ))
          : responseGroups.map(g => (
              <Section key={g.label} title={g.label} data={data[g.field]} filter={filter} />
            ))}
      </tbody>
    </table>
  </div>
);
