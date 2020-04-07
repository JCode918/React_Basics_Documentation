export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function toKelvinFromCelsius(celsius){ 
  return (celsius + 273.15);
}

export function toKelvinFromFahrenheit(fahrenheit){ 
  return (toCelsius(fahrenheit) + 273.15);
}



export function tryToConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}




