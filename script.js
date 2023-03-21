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
