import React from 'react';
import Clock from './components/Clock'
import Toggle from './components/Toggle'

import Greetings from './components/FunctionComponent'
//import { Welcome, GoodBye } from './components/ClassComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle/>
        <Greetings name='J.R.' />
        <Greetings name='Manka.' />
        <Greetings name='Jazz' />
        <Greetings name='Melody' />
        <Clock/>
      </header>
    </div>
  );
}

export default App;
