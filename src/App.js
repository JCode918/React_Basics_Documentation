import React from 'react';
import './App.css';
//import Calculator from './components_chapter10/Calculator'
import logo from './logo.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOflife: 35
    };
  }

  handleClick = () => {
    this.setState((prevState, prevProps) =>{
      return {meaningOflife: prevState.meaningOflife + prevProps.increment}
    }, () =>
      console.log(this.state.meaningOflife)
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt='logo' />
          <p>{this.state.meaningOflife}</p>
          <button onClick={this.handleClick}>Update</button>
        </header>
      </div>
    );
  }
}

export default App;
