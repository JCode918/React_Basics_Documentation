import React from 'react';
import './App.css';

const presidentUSA = 'Donald J. Trump'

export const StupidApp = () => {
    return (
        <div className="App">
          <header className="App-header">
           <h1>{presidentUSA} is an Idiot!</h1>
          </header>
        </div>
      );
  }

export default StupidApp;