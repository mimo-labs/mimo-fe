import { useState } from 'react';
import constate from 'constate';

// lib
import { User } from 'lib/types';

type useAuthProps = {
  initialUserInfo: User;
};

// lib
const useSession = ({ initialUserInfo }: useAuthProps) => {
  // react hooks
  const [userSession, setUserSession] = useState<User>(initialUserInfo);

  const isAuthenticated = () => {
    if (!userSession?.token) return false;

    // TODO: Add logic to determine if token has expired or not already
    const isExpirationValid = false;

    return isExpirationValid;
  };

  return { userSession, setUserSession, isAuthenticated };
};

const [SessionProvider, useSessionContext] = constate(useSession);

export { SessionProvider, useSessionContext };
