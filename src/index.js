import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './services/server';
import { Provider } from 'react-redux';
import store from './store/configureStore';
let server = makeServer();


if (process.env.NODE_ENV === 'development') {
  server.timing = 3000;
} else {
  server.shutdown();
}

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
