import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger';

import graphqlRequest from '../../src/store/middelware/graphqlRequest';
import rootReducer from './rootReducer';

const composeEnhancers = compose;

// const middlewares = [thunk, logger];
const middlewares = [thunk, graphqlRequest];

if (__DEV__) {
  middlewares.push(
    createLogger({
      collapsed: true,
      diff: true,
    }),
  );
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['signIn'],
};

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./rootReducer').default;
    store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
  });
}

export default {store, persistor};
