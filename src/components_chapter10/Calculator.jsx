import React from "react";
//import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import {
  toCelsius,
  toFahrenheit,
  tryToConvert,
  toKelvinFromFahrenheit,
  toKelvinFromCelsius
} from "./ConversionFunctions";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
    this.handleFarhenheitChange = this.handleFarhenheitChange.bind(this);
    this.handleCelsisuChange = this.handleCelsisuChange.bind(this);
    this.handleKelvinCelsiusChange = this.handleKelvinCelsiusChange.bind(this);
    this.handleKelvinFahrenheitChange = this.handleKelvinFahrenheitChange.bind(this);
  }
  handleCelsisuChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFarhenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  handleKelvinCelsiusChange(temperature) {
    this.setState({ scale: "kc", temperature });
  }

  handleKelvinFahrenheitChange(temperature) {
    this.setState({ scale: "kf", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryToConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryToConvert(temperature, toFahrenheit) : temperature;
    const kelvinCelsisus = scale === "c" ? tryToConvert(temperature, toKelvinFromCelsius) : temperature;
    const kelvinFahrenheit = scale === "f" ? tryToConvert(temperature, toKelvinFromFahrenheit) : temperature;

    return (
      <fieldset>
        <TemperatureInput
          scale="c"
          onTemperatureChange={this.handleCelsisuChange}
          temperature={celsius}
        />
        <TemperatureInput
          scale="f"
          onTemperatureChange={this.handleFarhenheitChange}
          temperature={fahrenheit}
        />
        <TemperatureInput
          scale="k"
          onTemperatureChange={this.state.scale === 'c' ? this.handleKelvinCelsiusChange: this.handleKelvinFahrenheitChange}
          temperature={this.state.scale === 'c' ? kelvinCelsisus: kelvinFahrenheit}
        />
        <BoilingVerdict celsius={celsius} />
      </fieldset>
    );
  }
}

export default Calculator;
