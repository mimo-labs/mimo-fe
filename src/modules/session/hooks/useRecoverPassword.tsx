import { axivios } from 'lib/axivios';

// shared
import { ENDPOINTS } from 'lib/api';

type RecoverPasswordValues = {
  email: string;
};

export const useRecoverPassword = () => {
  // methods
  const recoverPassword = ({ email }: RecoverPasswordValues) =>
    axivios({ isSession: true }).url(ENDPOINTS.session.recover()).post({ email }).json();

  return { recoverPassword };
};
