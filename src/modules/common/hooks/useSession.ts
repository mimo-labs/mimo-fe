import { useState, useMemo } from 'react';
import constate from 'constate';

// lib
import { User } from 'lib/types';
import { safeGetItem } from 'lib/helpers/localStorage';

// lib
const useSession = () => {
  // constants
  const storedUserInfo = safeGetItem('userSession');

  // react hooks
  const [userSession, setUserSession] = useState<User>(storedUserInfo);

  const isAuthenticated = useMemo(() => {
    if (!userSession?.token) return false;

    // TODO: Add logic to determine if token has expired or not already
    const isExpirationValid = false;

    return isExpirationValid;
  }, [userSession]);

  return { userSession, setUserSession, isAuthenticated };
};

const [SessionProvider, useSessionContext] = constate(useSession);

export { SessionProvider, useSessionContext };
