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
    return x.reduce((a, b) => a * b, 1);
  }

// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.

function getHighestNumber(x) {
    return Math.max.apply(null, x);
}

// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.

function getSmallestNumber(x) {
    return Math.min.apply(null, x);
}

// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.

function onlyOddNumbers(x) {
    return x.filter(a => (a % 2 !== 0));
}

// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.

function onlyEvenNumbers(x) {
    return x.filter(a => (a % 2 === 0));
}

// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.

function onlyPositiveNumbers(x) {
    return x.filter(a => (a > 0));
}

// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.

function onlyNegativeNumbers(x) {
    return x.filter(a => (a < 0));
}

// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence

function hasEvens(x) {
    return x.some((a => a % 2 === 0));
}

// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers

function countEvens(x) {
    return (x.filter(a => (a % 2 === 0))).length;
  }

// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence

function hasOdds(x) {
    return x.some((a => a % 2 !== 0));
}

// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence

function countOdds(x) {
    return (x.filter(a => a % 2 !== 0)).length;
}

// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers

function countPositives(x) {
    return (x.filter(a => (a > 0))).length;
  }

// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence

function onlyPositiveEvens(x) {
    let positiveEvens = x.filter(a => (a > 0 && a % 2 === 0));
    return positiveEvens;
  }

// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence

function onlyPositiveOdds(x) {
    let positiveOdds = x.filter(a => (a > 0 && a % 2 !== 0));
    return positiveOdds;
  }

// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence

function onlyNegativeEvens(x) {
    let negativeEvens = x.filter(a => (a < 0 && a % 2 === 0));
    return negativeEvens;
  }

// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence

function onlyNegativeOdds(x) {
    let negativeOdds = x.filter(a => (a < 0 && a % 2 !== 0));
    return negativeOdds;
  }

// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.

function shortestString(x) {
    return x.reduce((a, b) => a.length <= b.length ? a : b);
}

// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.

function longestString(x) {
    return x.reduce((a, b) => a.length >= b.length ? a : b);
}

// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an array with only the unique values from that array.

function getUniqueValues(x) {
    return x.filter((a, b, c) => c.indexOf(a) === b);
  }

// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.

function elementsTimesTwo(x) {
    return x.map((a) => a * 2);
  }

// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.

function flatten(x) {
    return x.flat();
}

// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array

function addOneToArray(x) {
    return x.map(a => a + 1);
  }  

// Using the following objects 
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}

// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property



// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.



const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price



// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name



const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]

// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
