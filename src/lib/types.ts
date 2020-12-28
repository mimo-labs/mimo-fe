// TODO: Change mock type
export type Verb = {
  id: number;
  name: string;
  organziation: number;
};

export type Mock = {
  id: number;
  title: string;
  path: string;
  verb: Verb;
  status_code: number;
  is_active: boolean;
  is_complete: boolean;
};

export type Endpoint = {
  endpoint: string;
  mocks: Mock[];
};

// TODO: Change user type
export type User = {
  token: string;
  id: number;
};

export type Axivios = {
  isSession?: boolean;
};

export type QueryParam = {
  [key: string]: unknown;
};
