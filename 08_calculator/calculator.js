const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let arraySum = 0;

  for (let i = 0; i < array.length; i++) {
    arraySum = arraySum + array[i];
  }
  return arraySum;
};


const multiply = function(array) {
  // Can't initalize multiplySum as 0, otherwise it won't multiply no matter the number
  // Initalized to first in array to prevent this from happening
  let multiplySum = array[0];

  for (let i = 1; i < array.length; i++) {

    multiplySum = multiplySum * array[i];
  }
  return multiplySum;
};

const power = function(num1, num2) {
	return (Math.pow(num1, num2));
};

const factorial = function(num) {
  let sum = 1;

	for (let i = 1; i <= num; i++) {
      sum = sum * i;
  }
  return sum;
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
