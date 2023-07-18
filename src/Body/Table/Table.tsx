import React from 'react';
import { HeaderRow } from './HeaderRow/HeaderRow';
import styles from './Table.module.scss';
import { groups } from './Table.config';
import { Section } from './Section/Section';
import { Request, Response } from '../../App.decl';
import { Filter } from '../Body';

type TableProps = {
  data: Request | Response;
  filter: Filter;
};

export const Table = ({ data, filter }: TableProps) => {

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <HeaderRow />
        <tbody>
          {groups.map(g => (
            <Section key={g.label} title={g.label} data={data[g.field]} filter={filter}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};
