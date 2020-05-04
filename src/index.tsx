import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

// pages
import Home from 'modules/mocks/pages/Home';
import Login from 'modules/session/pages/Login';

// store
import { store, persistor, history } from './store';

// lib
import { ROUTES } from 'lib/api';
import theme from 'lib/theme';

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <CSSReset />
            <Switch>
              <Route exact path={ROUTES.login}>
                <Login />
              </Route>
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </ThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<App />, document.querySelector('#root'));
