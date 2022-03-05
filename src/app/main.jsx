import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import reduxTest from './reduxTest'

reduxTest()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#app')
);
