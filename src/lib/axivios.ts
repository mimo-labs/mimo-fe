import { useHistory } from 'react-router-dom';
import wretch, { Wretcher, WretcherError } from 'wretch';

// lib
import { ROUTES } from 'lib/routes';
import { Axivios } from 'lib/types';
import { safeGetItem } from 'lib/helpers/localStorage';

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
  const { token } = safeGetItem('userSession');

  return wretch()
    .url(isSession ? SESSION_URL : API_URL)
    .auth(token ? token : '')
    .catcher(403, handleExpiredToken());
};
