import { axivios } from 'lib/axivios';

// lib
import { ENDPOINTS } from 'lib/api';

// hooks
import { useSession } from 'modules/common/hooks/useSession';

// types
// import { User } from 'lib/types/common';

type LoginValues = {
  email: string;
  password: string;
};

export const useLogin = () => {
  // router hooks
  const { setUserSession } = useSession();

  // methods
  const login = ({ email, password }: LoginValues) =>
    axivios({ isSession: true })
      .url(ENDPOINTS.session.login())
      .post({ email, password })
      .json()
      // TODO: Check this type
      .then((userData: any) => {
        setUserSession(userData);
        localStorage.setItem('userSession', JSON.stringify(userData));
      })
      .catch((error) => console.error(error.message));

  return { login };
};
