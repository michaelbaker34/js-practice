"use strict";

// Exercise 50
// Write a function definition named first that takes in sequence
// and returns the first value of that sequence.

function first(x) {
    return x[0];
}

// Exercise 51
// Write a function definition named second that takes in sequence
// and returns the second value of that sequence.

function second(x) {
    return x[1];
}

// Exercise 52
// Write a function definition named third that takes in sequence
// and returns the third value of that sequence.

function third(x) {
    return x[2];
}

// Exercise 53
// Write a function definition named forth that takes in sequence
// and returns the forth value of that sequence.

function forth(x) {
    return x[3];
}

// Exercise 54
// Write a function definition named last that takes in sequence
// and returns the last value of that sequence.

function last(x) {
    return x[x.length - 1];
}

// Exercise 55
// Write a function definition named secondToLast that takes in sequence
// and returns the second to last value of that sequence.

function secondToLast(x) {
    return x[x.length - 2];
}

// Exercise 56
// Write a function definition named thirdToLast that takes in sequence
// and returns the third to last value of that sequence.

function thirdToLast(x) {
    return x[x.length - 3];
}

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence
// and returns the first and second value of that sequence as an array

function firstAndSecond(x) {
    return x.slice(0,2);
}

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence
// and returns the first and last value of that sequence as an array

function firstAndLast(x) {
    var first = x[0];
    var last = x[x.length - 1];
    var newArr = [first, last];
  
  return newArr;
}

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.

function firstToLast(x) {
    var newArr = [];
    var arrShift = x.shift();
  
    newArr = x.push(arrShift);
  
  return x;
  }

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.

function sumAll(x) {
    var sum = x.reduce((a, b) => a + b, 0);
    return sum;
}

// function sumAll(x) {
//     var i = 0
//     x.forEach(function(element) {
//     i += element;  
//     });
//     return i;  
// }


//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value

function mean(x) {
    var sum = x.reduce((a, b) => a + b, 0) / x.length;
    return sum;
}

// function mean(x) {
//     var i = 0;
//     x.forEach(function(element) {
//       i += element;
//     })
//     return i / x.length;
//   }



// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the median value

function median(x) {
    var sortArr = x.sort();
    var middleElement = Math.ceil(x.length / 2);
    var medianElement = x.length % 2 == 0 ? (sortArr[middleElement] + sortArr[middleElement - 1]) / 2 : sortArr[middleElement - 1];
  
    return medianElement
}


// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus the minimum.

function maxMinusMin(x) {
    var sortArr = x.sort();
    var max = x[x.length - 1];
    var min = x[0];
    var difference = parseInt(max) - parseInt(min);
    
    return difference;
  }

// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together

function productOfAll(x) {
    
}

// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.



// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.



// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.



// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.



// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.



// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.



// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence



// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers



// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence



// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence



// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers



// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence



// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence



// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence



// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence
