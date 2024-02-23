import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { monumente } from './monumente';

// Set the title before rendering React components
document.title = 'Gest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <Card id={monumente[0].id} name={monumente[0].name} code={monumente[0].code} dimensions={monumente[0].dimensions} retailPrice={monumente[0].retailPrice} partnersPrice={monumente[0].partnersPrice} image={monumente[0].image}/>
      <Card id={monumente[1].id} name={monumente[1].name} code={monumente[1].code} dimensions={monumente[1].dimensions} retailPrice={monumente[1].retailPrice} partnersPrice={monumente[1].partnersPrice} image={monumente[1].image}/>
      <Card id={monumente[2].id} name={monumente[2].name} code={monumente[2].code} dimensions={monumente[2].dimensions} retailPrice={monumente[2].retailPrice} partnersPrice={monumente[2].partnersPrice} image={monumente[2].image}/>
      <Card id={monumente[3].id} name={monumente[3].name} code={monumente[3].code} dimensions={monumente[3].dimensions} retailPrice={monumente[3].retailPrice} partnersPrice={monumente[3].partnersPrice} image={monumente[3].image}/>
      <Card id={monumente[3].id} name={monumente[4].name} code={monumente[4].code} dimensions={monumente[4].dimensions} retailPrice={monumente[4].retailPrice} partnersPrice={monumente[4].partnersPrice} image={monumente[4].image}/>
      <Card id={monumente[3].id} name={monumente[5].name} code={monumente[5].code} dimensions={monumente[5].dimensions} retailPrice={monumente[5].retailPrice} partnersPrice={monumente[5].partnersPrice} image={monumente[5].image}/>
      <Card id={monumente[3].id} name={monumente[6].name} code={monumente[6].code} dimensions={monumente[6].dimensions} retailPrice={monumente[6].retailPrice} partnersPrice={monumente[6].partnersPrice} image={monumente[6].image}/>
      <Card id={monumente[3].id} name={monumente[7].name} code={monumente[7].code} dimensions={monumente[7].dimensions} retailPrice={monumente[7].retailPrice} partnersPrice={monumente[7].partnersPrice} image={monumente[7].image}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

