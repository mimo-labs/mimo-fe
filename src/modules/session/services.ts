// typesk
import { LoginResponse } from './types';

export const login = (mail: string, password: string): Promise<LoginResponse> =>
  new Promise((resolve) =>
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        mail,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => resolve(data)),
  );
