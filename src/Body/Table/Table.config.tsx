import { Tag } from './Tag/Tag';
import React from 'react';
import { Request, Response, RowData } from '../../App.decl';
import {TypeCell} from './TypeCell/TypeCell';

type ColumnsConfigType = {
  name: keyof RowData;
  displayName: string;
  render?: (data: RowData, path: string) => React.ReactNode;
}[];

export const columns: ColumnsConfigType = [
  {
    name: 'name',
    displayName: 'Name'
  },
  {
    name: 'pii',
    displayName: 'PII',
    render: (data, path) => <Tag value={data.pii} variant='pii' path={`${path}.pii`}> PII </Tag>,
  },
  {
    name: 'masked',
    displayName: 'Masking',
    render: (data, path) => <Tag value={data.masked} variant='masking' path={`${path}.masked`}> Masked </Tag>,
  },
  {
    name: 'type',
    displayName: 'Type',
    render: data => <TypeCell> {data.type} </TypeCell>,
  },
];


export type RequestGroups = keyof Request;

export const requestGroups: { field: RequestGroups; label: string }[] = [
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

export type ResponseGroups = keyof Response;

export const responseGroups: { field: ResponseGroups; label: string }[] = [
  {
    field: 'headers',
    label: 'Headers',
  },
  {
    field: 'body',
    label: 'Body',
  },
];

