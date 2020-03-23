import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import ClockFunct from './functions/ClockFunct'
//import Clock from './components/Clock'

import * as serviceWorker from './serviceWorker';


/* function tick() {

  ReactDOM.render(<App/>, document.getElementById('root'));
}

setInterval(tick, 1000) */;



 ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
