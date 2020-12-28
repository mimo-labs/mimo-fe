import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// session
import Recover from 'modules/session/pages/Recover';
import Reset from 'modules/session/pages/Reset';
import Login from 'modules/session/pages/Login';

// dashboard
import Dashboard from 'modules/dashboard/pages/Dashboard';

// common
import { SessionProvider } from 'modules/common/hooks/useSession';

// lib
import { theme } from 'lib/theme';
import { ROUTES } from 'lib/routes';
import PublicRoute from 'lib/router/PublicRoute';
import ProtectedRoute from 'lib/router/ProtectedRoute';
import { isDevelopment } from 'lib/helpers';

const queryClient = new QueryClient();

const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
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
            {isDevelopment() ? <ReactQueryDevtools position="bottom-right" /> : null}
          </Switch>
        </Router>
      </SessionProvider>
    </QueryClientProvider>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
