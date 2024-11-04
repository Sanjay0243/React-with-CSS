import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import Car from './component/car';
import Bike from './component/bike';


// function Car(){
//     return(
//         <h2>This is the car function</h2>
//     );
// }

// function Bike(){
//     return(
//         <>
//         <h2>This is the bike function</h2>
//         <Car />
//         </>
       
//     )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Bike />
     <App/>
  </React.StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();