"use strict";

/**********WHILE PRACTICE****************/
// make a loop to go from 0 to 20

function countTwenty() {
    var i = 0;
do {
    console.log(i);
    i += 2;
    } while (i <= 20)
}

/**********WHILE PRACTICE****************/
// make a loop to go from 20 to 50 with increments of ten

function countFifty() {
    var x = 20;
    while (x < 50) {
        console.log(x);
        x += 10;
    }
}

/**********WHILE PRACTICE 2****************
// write a program that will keep running until the user clicks ok
/*
var password = "Open Sesame";
var guess = "";
while(guess !== password) {
    guess = prompt("Please enter the password.");
}

function clickOk() {
    var counter = 0;
    var okClicked = prompt("Click ok.");
    while(okClicked !== true) {
        console.log(counter);
    }
}

var i = 20;

while (i < 21 ) {
    i = alert("click ok");
    console.log(i);
}
*/

/**********WHILE PRACTICE 3****************/
//create a function which puts on a coat if it's cold outside using a while loop

function coldWeather(temp) {
    while(temp < 60) {
        console.log("Put on a coat");
        break;
    }
}

/**********DO/WHILE PRACTICE ****************/
//Create a function that makes your $100k Tesla speed until the police are looking

function gottaGoFast() {
    var speed = console.log("We are speeding!");
    var policeRadar = false;

    do {
        speed;
    } while (policeRadar === false);
}

function speed(areCopsLooking) {
    var copsAreLooking = areCopsLooking;

    do {
        alert("Speeding");

        var response = prompt("Are the police watching?");

        if (response.toLowerCase() === "yes") {
            copsAreLooking = true;
        }
    } while (!copsAreLooking)

    alert("This is the police! Pull over!")
}

/**********FOR PRACTICE****************/
// // //Create a function which will:
// // //console log 'fizz' on every multiple of 3
// // //console log 'buzz' on every multiple of 5
// // //console log 'fizzbuzz' on every shared multiple of 3 and 5
// // //end the loop at.... well.. you decide!

function numberAnalyze() {
    for (var i = 0; i <= 100; i++) {
        console.log("============ " + i);
        if(i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz");
        }else if(i % 3 === 0) {
            console.log("fizz");
        }else if(i % 5 === 0) {
            console.log("buzz");
        }
    }
}

/**********Objects PRACTICE****************/

var beverages = {
    brandName: "Fiji",
    type: "Water",
    volumeInLiters: 5,
    priceInCents: .99,
    expirationDate: "2099",
    datesOfPreviousSips: ["05 April", "19 March"],
    isOpen: true
};

    beverages.brandName = "Home";
    beverages.type = "Coffee";
    beverages.volumeInLiters = 2;
    beverages.priceInCents = .5;
    beverages.expirationDate = "Today";
    beverages.datesOfPreviousSips = ["26 May", "04 June", "03 July"];
    beverages.isOpen = true;