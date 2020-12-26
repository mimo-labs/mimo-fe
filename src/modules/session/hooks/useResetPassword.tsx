import { axivios } from 'lib/axivios';

// shared
import { ENDPOINTS } from 'lib/api';

type ResetPasswordValues = {
  newPassword: string;
  newPasswordConfirmation: string;
};

export const useResetPassword = () => {
  // methods
  const resetPassword = ({ newPassword }: ResetPasswordValues) =>
    axivios({ isSession: true }).url(ENDPOINTS.session.reset()).post({ new_password: newPassword }).json();

  return { resetPassword };
};
