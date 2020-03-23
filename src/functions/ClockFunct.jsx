import React from 'react'
import '../App.css'

function ClockFunct(props) {
  return (
    <div className="App-header">
      <h1>Hello World!</h1>
      <h2>The Current Time: {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default ClockFunct;
