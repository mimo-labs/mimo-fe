import { useHistory } from 'react-router-dom';
import wretch, { Wretcher, WretcherError } from 'wretch';

// lib
import { ROUTES } from 'lib/routes';
import { Axivios } from 'lib/types';

// common
import { useSession } from 'modules/common/hooks/useSession';

// constants
export const BASE_URL = process.env.REACT_APP_MIMO_API;
export const API_URL = `${BASE_URL}/api/v1`;
export const SESSION_URL = `${BASE_URL}`;

// headers
export const generateAuthHeader = (token: string): string => `JWT ${token}`;

// handlers
const handleExpiredToken = () => (_error: WretcherError, originalRequest: Wretcher) => {
  const history = useHistory();

  history.push(ROUTES.login);

  return originalRequest;
};

// custom fetch
export const axivios = ({ isSession = false }: Axivios = {}): Wretcher => {
  // custom hooks
  const { userSession } = useSession();

  // constants
  const { token } = userSession;

  const apiUrl = isSession ? SESSION_URL : API_URL;
  const authenticationToken = isSession ? '' : `token ${token}`;

  return wretch().url(apiUrl).auth(authenticationToken).catcher(403, handleExpiredToken());
};
