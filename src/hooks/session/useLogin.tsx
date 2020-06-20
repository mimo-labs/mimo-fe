import { axivios } from 'lib/axivios';
import { useHistory } from 'react-router-dom';

// lib
import { ROUTES } from 'lib/routes';
import { ENDPOINTS } from 'lib/api';

// hooks
import { useSessionContext } from 'hooks/common/useSession';

// types
// import { User } from 'lib/types/common';

type LoginValues = {
  email: string;
  password: string;
};

export const useLogin = () => {
  // router hooks
  const { setUserSession } = useSessionContext();
  const history = useHistory();

  // methods
  const login = ({ email, password }: LoginValues) =>
    axivios()
      .url(ENDPOINTS.session.login())
      .post({ email, password })
      .json()
      // TODO: Check this type
      .then((userData: any) => {
        setUserSession(userData);
        localStorage.setItem('userSession', JSON.stringify(userData));

        setTimeout(() => {
          history.push(ROUTES.home);
        }, 700);
      })
      .catch((error) => console.error(error.message));

  return { login };
};
