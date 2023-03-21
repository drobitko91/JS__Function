'use strict'

// minimum
// task 1

function showMessage() {
    console.log('Hi, and have a nice day!');
}

const showMessageTwo = function() {
    console.log('Good day!');
}

const arrowFunction = (a, b) => {
  return a + b;
}

const arrowFunc = a => a * 2;

function regularAr(a) {
  return a*2;
}

const sum = new Function('a', 'b', 'return a + b');


// task 2

function getArgumentsAmount(a, b) {
  console.log(arguments.length);
}
// getArgumentsAmount(2, 5, 7, 6);

// task 3

function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  };
  if (a > b) {
    return 1;
  }
  return 0;
}

// task 4

function getFact(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  return result;
}
// console.log(getFact(5));

// task 5
function concatNumbers(a, b, c) {
  const stringRes = Number(`${a}${b}${c}`);
  console.log(typeof stringRes);
  return stringRes;
}
// console.log(concatNumbers(1, 2, 3));

// task 6

function getSquareArea(a, b) {
  if (!b) {
    return a * a;
  } 
  return a * b;
}
// console.log(getSquareArea(3));
// console.log(getSquareArea(2, 3));


// norma
// task 1

function isPerfectNumber(a) {
  let result = 0;
  for (let i = a / 2; i >= 1; i--) {
    if (a % i === 0) {
      result = result + i;
    } 
  }
  if (result === a) {
    return true;
  }
}
console.log(isPerfectNumber(28));

function getAllPerfectNumbers(min, max) {
  const arr = [];

  for ( let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      arr.push(i);
    }
  } 
  return arr;
}
console.log(getAllPerfectNumbers(5, 28));