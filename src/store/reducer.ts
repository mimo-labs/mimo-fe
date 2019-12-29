import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter } from 'connected-react-router';

// types
import { History } from 'history';

// Reducers
import sessionReducer from 'modules/session/reducer';

// Persist Config
const sessionPersistConfig = { key: 'sample', blacklist: [], storage };

// reducers
export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    session: persistReducer(sessionPersistConfig, sessionReducer),
  });
