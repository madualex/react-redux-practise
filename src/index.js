import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import userReducer from './features/user'
import themeReducer from './features/theme'
import App from './App';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// A configureStore is where you keep a collection of reducers.

// A reducer is a function that contains states and actions that is used to update or change such states. It is created using redux as a global state in the state component in redux folder and then imported into the topmost level component index.js from which it can then be accessed 