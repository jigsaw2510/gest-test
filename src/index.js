import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList.js'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { monumente } from './monumente';

// Set the title before rendering React components
document.title = 'Gest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <CardList monumente={monumente} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

