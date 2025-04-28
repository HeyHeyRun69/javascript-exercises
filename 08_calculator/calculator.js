const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((accumulator, currentIndex) => accumulator + currentIndex, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((accumulator, currentIndex) => accumulator * currentIndex, 1);
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  let numbers = [];
  for(let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers.reduce((accumulator, currentIndex) => accumulator * currentIndex, 1);
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
