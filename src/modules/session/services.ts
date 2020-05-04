// typesk
import { LoginResponse } from './types';

// lib
import { BASE_URL } from 'lib/api';

export const login = (email: string, password: string): Promise<LoginResponse> =>
  new Promise((resolve) =>
    fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data)),
  );
