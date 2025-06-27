import React, { Component, useEffect } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { store, persistor } from '../src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const Asd = () => {
    useEffect(() => {
      // SplashScreen.hide();
      console.log("abc")
    }, []);
    return null;
  };

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={<Asd />} persistor={persistor}>
                <App />
        </PersistGate>
    </Provider>
);

export default Root;