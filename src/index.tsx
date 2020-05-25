import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

// pages
import Home from 'modules/mocks/pages/Home';
import Login from 'modules/session/pages/Login';

// hooks
import { SessionProvider } from 'hooks/useSession';

// lib
import { ROUTES } from 'lib/api';
import theme from 'lib/theme';

const App = () => (
  <Router>
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Switch>
          {/* TODO: implement private routing */}
          <Route exact path={ROUTES.login}>
            <Login />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </SessionProvider>
  </Router>
);

ReactDOM.render(<App />, document.querySelector('#root'));
