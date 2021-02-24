"use strict";

/**********WHILE PRACTICE****************/
// make a loop to go from 0 to 20
//
// function countTwenty() {
//     var i = 0;
// do {
//     console.log(i);
//     i += 2;
//     } while (i <= 20)
// }
//
// /**********WHILE PRACTICE****************/
// make a loop to go from 20 to 50 with increments of ten
//
// function countFifty() {
//     var x = 20;
//     while (x < 50) {
//         console.log(x);
//         x += 10;
//     }
// }

// /**********WHILE PRACTICE 2****************
// write a program that will keep running until the user clicks ok
// /!*
// var password = "Open Sesame";
// var guess = "";
// while(guess !== password) {
//     guess = prompt("Please enter the password.");
// }
//
// function clickOk() {
//     var counter = 0;
//     var okClicked = prompt("Click ok.");
//     while(okClicked !== true) {
//         console.log(counter);
//     }
// }
//
// var i = 20;
//
// while (i < 21 ) {
//     i = alert("click ok");
//     console.log(i);
// }
// *!/
//
// /!**********WHILE PRACTICE 3****************!/
//create a function which puts on a coat if it's cold outside using a while loop
//
// function coldWeather(temp) {
//     while(temp < 60) {
//         console.log("Put on a coat");
//         break;
//     }
// }
//
// /!**********DO/WHILE PRACTICE ****************!/
// //Create a function that makes your $100k Tesla speed until the police are looking
//
// function gottaGoFast() {
//     var speed = "We are speeding!";
//     var policeRadar = false;
//
//     do {
//         console.log(speed);;
//     } while (policeRadar === false);
// }
//
// function speed(areCopsLooking) {
//     var copsAreLooking = areCopsLooking;
//
//     do {
//         alert("Speeding");
//
//         var response = prompt("Are the police watching?");
//
//         if (response.toLowerCase() === "yes") {
//             copsAreLooking = true;
//         }
//     } while (!copsAreLooking)
//
//     alert("This is the police! Pull over!")
// }

/***********FOR PRACTICE****************/
//Create a function which will:
//console log 'fizz' on every multiple of 3
//console log 'buzz' on every multiple of 5
//console log 'fizzbuzz' on every shared multiple of 3 and 5
//end the loop at.... well.. you decide!

// function numberAnalyze() {
//     for (var i = 0; i <= 100; i++) {
//         console.log("============ " + i);
//         if(i % 5 === 0 && i % 3 === 0) {
//             console.log("fizzbuzz");
//         }else if(i % 3 === 0) {
//             console.log("fizz");
//         }else if(i % 5 === 0) {
//             console.log("buzz");
//         }
//     }
// }

// // /!**********Objects PRACTICE****************/

// var beverages = {
//     brandName: "Fiji",
//     type: "Water",
//     volumeInLiters: 5,
//     priceInCents: .99,
//     expirationDate: "2099",
//     datesOfPreviousSips: ["05 April", "19 March"],
//     isOpen: true
// };

//     beverages.brandName = "Homebrew";
//     beverages.type = "Coffee";
//     beverages.volumeInLiters = 2;
//     beverages.priceInCents = .5;
//     beverages.expirationDate = "Today";
//     beverages.datesOfPreviousSips = ["26 May", "04 June", "03 July"];
//     beverages.isOpen = true;

//     var users = [
//         {
//             givenName: "Sam",
//             age: 21
//         },
//         {
//             givenName: "Cathy",
//             age: 34
//         },
//         {
//             givenName: "Karen",
//             age: 43
//         }
//     ]

// console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName);
// users[0].givenName = "John Doe";
// users[1].givenName = "John Doe";
// users[2].givenName = "John Doe";
// console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName);
// users[0].age += 1;
// users[1].age += 1;
// users[2].age += 1;
// console.log(users[0].age + " " + users[1].age + " " + users[2].age);

// for (var i = 0; i < users.length; i++) {
//     console.log(users[i].givenName);
// }

// users.forEach(function (name) {
//     console.log(name.givenName);
// })
//
// users.forEach(function (rename) {
//     rename.givenName = "John Doe";
// });
//
// users.forEach(function (increaseAge) {
//     increaseAge.age += 1;
// });

// console.log(users);

// var dog = {}
// dog.breed = "Big Dog";
// dog.weightInPounds = 60;
// dog.age = 4;
// dog.color = "Red";
// dog.canBreed = true;
// dog.shotRecords = [
//     {
//     shotType: "Good Dog Shot",
//     shotDate: "12 November 2018",
//     },
//     {
//     shotType: "Strong Dog Shot",
//     shotDate: "20 June 2019"
//     }
// ];
// dog.bark = function () {
//     console.log("Woof!");
// };
//
// dog.getOlder = function getOlder() {
//     this.age += 1;
// };
//
// dog.disableBreeding = function () {
//     this.canBreed = false;
// };
//
// dog.vaccinate = function vaccinate(nameOfVaccination) {
//     var newShot = {
//         shotType: nameOfVaccination,
//         shotDate: new Date()
//     };
//     dog.shotRecords.push(newShot);
// };
//
// dog.bark();
// dog.getOlder();
// console.log(dog.age);
// dog.disableBreeding();
// console.log(dog.canBreed);
// dog.vaccinate("New Vaccine");
// console.log(dog.shotRecords);

