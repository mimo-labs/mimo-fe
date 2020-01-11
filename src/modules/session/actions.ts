import { LoginResponse } from './types';

// action types
export enum SessionTypes {
  LOG_IN_REQUEST = 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
  LOG_IN_FAILURE = 'LOG_IN_FAILURE',
}

// action creators
export const loginRequest = (email: string, password: string): LoginRequestAction => ({
  type: SessionTypes.LOG_IN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = (res: LoginResponse): LoginSuccessAction => ({
  type: SessionTypes.LOG_IN_SUCCESS,
  payload: res,
});

export const loginFailure = (err: unknown): LoginFailureAction => ({
  type: SessionTypes.LOG_IN_FAILURE,
  payload: err,
});

export type LoginRequestAction = {
  type: SessionTypes.LOG_IN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
};

// types
export type LoginSuccessAction = {
  type: SessionTypes.LOG_IN_SUCCESS;
  payload: LoginResponse;
};

export type LoginFailureAction = {
  type: SessionTypes.LOG_IN_FAILURE;
  payload: unknown;
};
