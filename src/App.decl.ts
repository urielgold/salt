export type RowData = {
  name: string,
  pii: boolean,
  masked: boolean,
  type: string
}

export type RequestParam = {
  name: string;
  pii: boolean;
  masked: boolean;
  type: string;
};

export type Request = {
  urlParams: RequestParam[];
  queryParams: RequestParam[];
  headers: RequestParam[];
  body: RequestParam[];
};

export type Response = {
  headers: RequestParam[];
  body: RequestParam[];
};

export type APIConfig = {
  api: string;
  method: string;
  path: string;
  request: Request;
  response: Response;
};

export type RequestResponseType = 'response' | 'request';