import React from "react";
//import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import {toCelsius, toFahrenheit, tryToConvert} from './ConversionFunctions'

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
    this.handleFarhenheitChange = this.handleFarhenheitChange.bind(this);
    this.handleCelsisuChange = this.handleCelsisuChange.bind(this);
  }
  handleCelsisuChange(temperature){
    this.setState({scale: 'c', temperature})
  }

  handleFarhenheitChange(temperature){
    this.setState({scale: 'f', temperature})
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale ==='f' ? tryToConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryToConvert(temperature, toFahrenheit) : temperature;
 
    return (
      <fieldset>
        <TemperatureInput scale="c" onTemperatureChange={this.handleCelsisuChange} temperature={celsius} />
        <TemperatureInput scale="f" onTemperatureChange={this.handleFarhenheitChange} temperature={fahrenheit} />
        <BoilingVerdict celsius={celsius}/>
      </fieldset>
    );
  }
}

export default Calculator;
