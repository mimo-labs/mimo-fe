import constate from 'constate';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// lib
import { axivios, ENDPOINTS } from 'lib/api';

// hooks
import { usePrintError } from 'hooks/usePrintError';

// TODO: check why this type is throwing error
// type User = {
//   token: string;
//   id: number;
// };

type User = any;

function useSession() {
  // react hooks
  // TODO: reimplement using react-query if possible
  const [status, setStatus] = useState<'pending' | 'resolved' | 'rejected' | null>(null);
  const [user, setUserData] = useState<User>(undefined);

  // custom hooks
  usePrintError(status);

  // router hooks
  const history = useHistory();

  // methods
  const login = (email: string, password: string) => {
    setStatus('pending');

    axivios('', true)
      .url(ENDPOINTS.login())
      .post({ email, password })
      .json()
      .then((data: User) => {
        setUserData(data);
        setStatus('resolved');

        history.push('/');
      })
      .catch(() => setStatus('rejected'));
  };

  const isAuthenticated = user?.token;

  return { login, status, user, isAuthenticated };
}

const [SessionProvider, useSessionContext] = constate(useSession);

export { SessionProvider, useSessionContext };
