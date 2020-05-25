import { useHistory } from 'react-router-dom';
import wretch, { Wretcher, WretcherError } from 'wretch';

// constants
export const BASE_URL = process.env.REACT_APP_MIMO_API;
export const API_URL = `${BASE_URL}/api/v1`;
export const SESSION_URL = `${BASE_URL}`;

// headers
export const generateAuthHeader = (token: string) => `JWT ${token}`;

// handlers
const handleExpiredToken = () => (_error: WretcherError, originalRequest: Wretcher) => {
  const history = useHistory();

  history.push('/');

  return originalRequest;
};

// custom fetch
export const axivios = (token?: string, isSession: boolean = false) =>
  wretch()
    .url(isSession ? SESSION_URL : API_URL)
    .auth(`JWT ${token}`)
    .catcher(403, handleExpiredToken());

export const ENDPOINTS = {
  login: () => `/login`,
  logout: () => `/logout`,
};

export const ROUTES = {
  home: '/',
  login: '/login',
};
