import React, { Fragment, useMemo, useState } from 'react';

import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DataRow } from '../DataRow/DataRow';
import { RowData } from '../../../App.decl';
import styles from './Section.module.scss';
import { Filter } from '../../Body';

type SectionProps = {
  title: string;
  data: RowData[];
  filter: Filter;
};

export const Section = ({ data, title, filter }: SectionProps) => {
  const [expanded, setExpanded] = useState(true);
  const { onlyPII, text } = filter;

  const rows = useMemo(
    () =>
      data?.filter(r => {
        const onlyPIIFilter = onlyPII ? r.pii : true;
        const textIncluded = !text || r.name.includes(text);

        return onlyPIIFilter && textIncluded;
      }),
    [data, onlyPII, text],
  );

  if (!rows || !rows.length) return null;

  return (
    <Fragment>
      <tr className={styles.section} onClick={() => setExpanded(val => !val)}>
        <td>
          <FontAwesomeIcon
            icon={expanded ? faChevronDown : faChevronRight}
            className={styles.chevron}
          />
          <span>{title}</span>
        </td>
      </tr>
      {expanded && rows.map((row, index) => <DataRow data={row} key={index}/>)}
    </Fragment>
  );
};
