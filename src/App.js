import React from 'react';
import './App.css';
import NameForm from './components_chapter9/NameForm'
import EssayForm from './components_chapter9/EssayForm'
import SelectForm from './components_chapter9/SelectForm'
import Reservation from './components_chapter9/Reservation'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/*  <NameForm />
        <EssayForm />
        <SelectForm /> */}
        <Reservation/>
      </header>
    </div>
  );
}

export default App;
