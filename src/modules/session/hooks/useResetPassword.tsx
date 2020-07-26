import { axivios } from 'lib/axivios';

// shared
import { ENDPOINTS } from 'lib/api';

type ResetPasswordValues = {
  newPassword: string;
};

export const useResetPassword = () => {
  // methods
  const resetPassword = ({ newPassword }: ResetPasswordValues) =>
    axivios().url(ENDPOINTS.session.reset()).post({ new_password: newPassword }).json();

  return { resetPassword };
};
