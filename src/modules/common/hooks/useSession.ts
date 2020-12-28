import { useState, useMemo } from 'react';
import constate from 'constate';

// lib
import { User } from 'lib/types';
import { safelyGetItem } from 'lib/helpers';

// lib
const useSessionConstate = () => {
  // constants
  const storedUserInfo = safelyGetItem<User>('userSession');

  // react hooks
  const [userSession, setUserSession] = useState<User>(storedUserInfo);

  const isAuthenticated = useMemo(() => {
    if (!userSession?.token) return false;

    // TODO: Add logic to determine if token has expired or not already
    const isExpirationValid = true;

    return isExpirationValid;
  }, [userSession]);

  return { userSession, setUserSession, isAuthenticated };
};

const [SessionProvider, useSession] = constate(useSessionConstate);

export { SessionProvider, useSession };
