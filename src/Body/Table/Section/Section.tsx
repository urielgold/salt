import { Fragment, useMemo, useState } from 'react';

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
  path: string;
};

export const Section = ({ data, title, filter, path }: SectionProps) => {
  const [expanded, setExpanded] = useState(true);
  const { onlyPII, text } = filter;

  const rows = useMemo(
    () =>
      data?.map(r => {
        const onlyPIIFilter = onlyPII ? r.pii : true;
        const textIncluded = !text || r.name.includes(text) || r.type.includes(text);

        const visible = onlyPIIFilter && textIncluded;
        return { data: r, visible };
      }),
    [data, onlyPII, text],
  );

  const isEmpty = !rows || !rows.some(r => r.visible);

  if (isEmpty) return null;

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
      {expanded && rows.map((row, index) =>
        row.visible && <DataRow data={row.data} key={index} path={`${path}[${index}]`}/>
      )}
    </Fragment>
  );
};
