import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

// Root Reducer & Root Saga
import { rootSaga } from './sagas';
import { createRootReducer } from './reducer';

// Router Middleware
const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// redux-devtools types
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Combined Middlewares
const middlewares = [sagaMiddleware, routerMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store initial state
const initialState = {};

// store creation
const configureStore = () => {
  // TODO: Delete the any type for the correct one
  const store: any = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

const { store, persistor } = configureStore();

export { store, persistor, history };
