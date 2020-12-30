// TODO: Change mock type
export type Verb = {
  id: number;
  name: string;
  // TODO: It should return all the organization object, for consitency
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

export type Organziation = {
  id: number;
  uuid: string;
  profile: {
    public_name: string;
    avatar: string;
  };
  name: string;
};

export type Project = {
  id: number;
  name: string;
  // TODO: It should return all the organization object, for consitency
  organization: number;
};
