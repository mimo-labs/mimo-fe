import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './lib/reset.css';

// pages
import Home from 'modules/mocks/pages/Home';
import Login from 'modules/session/pages/Login';

// store
import { store, persistor, history } from './store';

// lib
import { ROUTES } from 'lib/constants';

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={ROUTES.login}>
              <Login />
            </Route>
            <Route exact path="*">
              <Home />
            </Route>
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<App />, document.querySelector('#root'));
