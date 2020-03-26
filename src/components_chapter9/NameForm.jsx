import React from "react";

export class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    //Binding of Functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Method runs every time there is a change to the textinput
  handleChange(e) {
    this.setState({
      value: e.target.value.toUpperCase(),
    });
  }

  // Method is triggered when Form is submitted
  handleSubmit(e) {
    alert("A name was submitted " + this.state.value);
    e.preventDefault();
  }

  // Method used to clear the Text box
  handleClick() {
    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="SUBMIT NAME" />
        </form>
        <button onClick={this.handleClick}>CLEAR FORM</button>
      </div>
    );
  }
}

export default NameForm;
