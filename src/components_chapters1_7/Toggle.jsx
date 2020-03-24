import React from "react";

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    // Must utilize this to create a binding, if you use the syntax <Button onClick={() => this.handleClick()} its not needed
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render(){
      return(
      <button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      )
  }
}

export default Toggle;
