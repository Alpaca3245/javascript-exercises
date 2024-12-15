const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, currentIndex) => total + currentIndex, 0);
};

// Does not factor in when multiplying for 0
const multiply = function(array) {
  return array.reduce((total, currentIndex) => total * currentIndex, 0);
};

const power = function(num1, num2) {
  let newArr = [];

  // Creates an array using just num1, and with the total of num1 in the array is equal to num2,
  // use reduce to multiply the total with currentindex to get the power
  // More compilated than a for loop, but this is for practice.
  for (let i = 0; i < num2; i++) {
    newArr.push(num1);
  }
  return newArr.reduce((total, currentIndex) => total * currentIndex, 1);
};

const factorial = function(num) {
  
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
