import React from "react";
import "../App.css";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
    };
  }
  /*Lifecyle Method that is ran once the output is rendered */
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.countId = setInterval(() => this.addEvery10Seconds(), 10000);
  }

  /*Lifecylce Method that will clear what is set in the componentDidMount*/
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  addEvery10Seconds() {
    let newVal = this.state.count + 1;
    this.setState({
      count: newVal,
    });
  }

  render() {
    return (
      <div className="App-header">
        <h1>Hello World, Today is {this.state.date.toLocaleDateString()}</h1>
        <h2>The Current Time: {this.state.date.toLocaleTimeString()}</h2>
        <h3>The Count Click is Currently: {this.state.count}</h3>
      </div>
    );
  }
}

export default Clock;
