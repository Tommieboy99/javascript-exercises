const convertToCelsius = function(inputFahrenheit) {
  if (inputFahrenheit === 32) {
    return 0;
  }
  let Celcius = (inputFahrenheit - 32) * 5 / 9;
  return Number(Celcius.toFixed(1));
};

const convertToFahrenheit = function(inputCelcius) {
  if (inputCelcius === 0) {
    return 32;
  }
  let Fahrenheit = (inputCelcius * 9/5) + 32;
  return Number(Fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
