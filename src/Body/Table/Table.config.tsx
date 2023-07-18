import { Tag } from './Tag/Tag';
import React from 'react';
import { RowData } from '../../App.decl';

type ColumnsConfigType = {
  name: keyof RowData;
  displayName: string;
  render?: (data: RowData) => React.ReactNode;
}[];

export const columns: ColumnsConfigType = [
  {
    name: 'name',
    displayName: 'Name'
  },
  {
    name: 'pii',
    displayName: 'PII',
    render: data => <Tag outline={!data.pii} variant='pii' > PII </Tag>,
  },
  {
    name: 'masked',
    displayName: 'Masking',
    render: data => <Tag outline={!data.masked} variant='masking'> Masked </Tag>,
  },
  {
    name: 'type',
    displayName: 'Type',
    render: data => <Tag outline={false} variant='type'> {data.type} </Tag>,
  },
];


export type GroupsType = 'urlParams' | 'queryParams' | 'headers' | 'body';

export const groups: { field: GroupsType; label: string }[] = [
  {
    field: 'urlParams',
    label: 'URL Parameters',
  },
  {
    field: 'queryParams',
    label: 'Query Parameters',
  },
  {
    field: 'headers',
    label: 'Headers',
  },
  {
    field: 'body',
    label: 'Body',
  },
];