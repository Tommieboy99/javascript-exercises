const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function(numbers) {
	return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, current) => product * current, 1);
};

const power = function(number, numberPower) {
	return number ** numberPower;
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
