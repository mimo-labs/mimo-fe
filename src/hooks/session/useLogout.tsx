import { useHistory } from 'react-router-dom';

// lib
import { ROUTES } from 'lib/routes';

export const useLogout = () => {
  // router hooks
  const history = useHistory();

  // methods
  const logout = () => {
    localStorage.removeItem('userSession');
    history.push(ROUTES.login);
  };

  return { logout };
};
