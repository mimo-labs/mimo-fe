import React from 'react';

// components
import LoginForm from 'modules/session/components/LoginForm';

// ui
import SessionLayout from 'ui/layouts/SessionLayout';

const Login = () => (
  <SessionLayout>
    <LoginForm />
  </SessionLayout>
);

export default Login;
