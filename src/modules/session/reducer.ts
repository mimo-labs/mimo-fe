// imports
import { LoginRequestAction, LoginSuccessAction, LoginFailureAction, SessionTypes } from './actions';

// initial reducer state values
const INITIAL_STATE = {
  userId: 0,
  token: '',
};

// initial reducer state types
export type SessionState = {
  userId: number;
  token: string;
};

export type SessionAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

export default function sessionReducer(state: SessionState = INITIAL_STATE, action: SessionAction): SessionState {
  switch (action.type) {
    case SessionTypes.LOG_IN_REQUEST:
      return {
        ...state,
      };
    case SessionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.id,
      };
    case SessionTypes.LOG_IN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
