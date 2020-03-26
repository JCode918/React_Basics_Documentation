import React from "react";

export class SelectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ['Grape', 'Lime'],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite Flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick Your Favorite Flavor:
          <select
            multiple={true}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="Grapefruit">Grapefruit</option>
            <option value="Grape">Grape</option>
            <option value="Lime">Lime</option>
            <option value="Mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectForm;
