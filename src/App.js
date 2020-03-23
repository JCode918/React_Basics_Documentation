import React from 'react';

import Greetings from './components/FunctionComponent'
import { Welcome, GoodBye } from './components/ClassComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome firstName='Willard' lastName='Joseph' />
        <Welcome firstName='Jazz' lastName='Joseph' />
        <Welcome firstName='Melo' lastName='Joseph' />
        <GoodBye name='Willard Joseph' />
        <GoodBye name='Jazz Joseph' />
        <GoodBye name='Christine Joseph' />
        <Greetings name='J.R.' />
        <Greetings name='Monka' />
        <Greetings name='Jazz' />
        <Greetings name='Melody' />
      </header>
    </div>
  );
}

export default App;
