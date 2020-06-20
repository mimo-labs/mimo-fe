import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

// pages
import Dashboard from 'modules/mocks/pages/Dashboard';
import Login from 'modules/session/pages/Login';

// hooks
import { SessionProvider } from 'hooks/common/useSession';

// lib
import { ROUTES } from 'lib/routes';
import { safeGetItem } from 'lib/helpers/localStorage';
import theme from 'lib/theme';

const storedUserInfo = safeGetItem('userSession');

const App = () => (
  <Router>
    <SessionProvider initialUserInfo={storedUserInfo}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Switch>
          <Route exact path={ROUTES.login}>
            <Login />
          </Route>
          <Route path="*">
            <Dashboard />
          </Route>
        </Switch>
      </ThemeProvider>
    </SessionProvider>
  </Router>
);

ReactDOM.render(<App />, document.querySelector('#root'));
