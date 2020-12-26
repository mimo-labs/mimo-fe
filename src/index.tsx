import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// pages
import Dashboard from 'modules/mocks/pages/Dashboard';
import Recover from 'modules/session/pages/Recover';
import Reset from 'modules/session/pages/Reset';
import Login from 'modules/session/pages/Login';

// hooks
import { SessionProvider } from 'modules/common/hooks/useSession';

// lib
import { theme } from 'lib/theme';
import { ROUTES } from 'lib/routes';
import PublicRoute from 'lib/router/PublicRoute';
import ProtectedRoute from 'lib/router/ProtectedRoute';

const App = () => (
  <ChakraProvider theme={theme}>
    <SessionProvider>
      <Router>
        <Switch>
          <PublicRoute exact path={ROUTES.login}>
            <Login />
          </PublicRoute>
          <PublicRoute exact path={ROUTES.recover}>
            <Recover />
          </PublicRoute>
          <PublicRoute exact path={ROUTES.reset}>
            <Reset />
          </PublicRoute>
          <ProtectedRoute path="*">
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </Router>
    </SessionProvider>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
