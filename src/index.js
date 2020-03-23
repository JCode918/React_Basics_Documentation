import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


/* function tick() {
  const element = (
    <div className="App">
      <div className="App-header">
        <StupidApp/>
        <App/>
        <Greetings name='Willard Joseph'/>
        <Greetings name='Willard Christian Jazz Joseph'/>
        <Greetings name='Christine Divine Melody Joseph'/>
        <h1>Hello Everyone, Donald J Trump is an Idiot!</h1>
        <h2>Todays Date is {new Date().toLocaleDateString()}!</h2>
        <h3>It is {new Date().toLocaleTimeString()}.</h3>
      </div>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000); */

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
