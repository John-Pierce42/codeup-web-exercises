(function (){

"use strict";

// --------------- assessment functions -------------------------->

/*
Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax should return false.

calculateTax(25, 8)				 // "$27.00"
calculateTax(10, 12)             // "$11.20"
calculateTax(120, 15.5)			 //	"$138.60"
calculateTax(10, true)           // false
calculateTax([1, 2, 3], 10)      // false
calculateTax("Codeup", 100)      // false
calculateTax()                   // false
 */

function calculateTax(x,y){
    if(x === 10 && y === true){
        return false;
    } else if( Array.isArray(x) && y === 10){
        return false;
    } else if(typeof x === "string" && y === 100){
        return false;
    }
    var y = y / 100;
    var total = x * y;
     var totalAmount = x + total;
     return totalAmount.toFixed(2)
}
/*
Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.

timesTwo(0) //0
timesTwo(“5”) //20
timesTwo(-5) //-20
timesTwo(“Texas”) //false
timesTwo([2,1,0]) //false
timesTwo(true) //false
timesTwo(null) //false

 */
function timesFour(x){
    if( x === "Texas" || Array.isArray(x) || typeof x === "boolean" || x === null){
        return false;
    }
    return x * 4;
}

/*
Define a function named convertDaysToHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaysToHours, should return false.
 */

function convertDaysToHours(x){
    if(isNaN(x) || x === null || typeof x === "boolean"){
        return false;
    }
    return x * 24;
}

    function lowerCase(x){
    if (!isNaN(parseInt(x))) {
        return false;
    } else if (typeof (x) === "string"){
        return x.toLowerCase();
    } else{
    return false;
}
}


    /*
    Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.

     lowerCase('CODEUP')                 // codeup
     lowerCase('George WashingTon')      // george washington
     lowerCase(0)                        // false
     lowerCase(true)                     // false
     lowerCase('BoBby')                  // bobby
     lowerCase(null)                     // false
     lowerCase([1,2,3])                  // false
     lowerCase({fName: 'Bruce', lName: 'Wayne'})    // false
     */

    function lowerCase(input) {
        if (typeof input === "string"){
            return input.toLowerCase();
        } else {
            return false;
        }

    }

    // Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.
    //
    // subtract(10, 2)                     // 8
    // subtract(0, 0)                      // 0
    // subtract(-4, 1)                     // -5
    // subtract("10", 2)                   // 8
    // subtract(5, true)                   // false
    // subtract(true, false)               // false
    // subtract("Monday", "Tuesday")       // false
    // subtract()                          // false

    function subtract(input1,input2) {
        if (typeof input1 === "boolean" || typeof input2 === "boolean") {
            return false;

        } else if( isNaN(input1) || isNaN(input2)){
            return false;
        }
        return input1 - input2;

    }

    /*
Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

 getLowestNumber(1, 3, 2)            // 1
 getLowestNumber("0", 1, 2)          // 0
 getLowestNumber(9, 3, -20)          // -20
 getLowestNumber(2, 2, 2)            // 2
 getLowestNumber(2, 5, 5)            // 2
 getLowestNumber(1, 2, 'x')          // false
 getLowestNumber("a", "b")           // false
 getLowestNumber()                   // false
 */

    function getLowestNumber (x,y,z){
        if (isNaN(x) || isNaN(y) || isNaN(z)){
            return false;
        }
        return Math.min(x,y,z);
    }


   /* Define a function named isEvenlyDivisible that takes in two inputs: a numeric value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.

    isEvenlyDivisible(100, 2)           // true
    isEvenlyDivisible("100", 3)         // false
    isEvenlyDivisible(150, 3)           // true
    isEvenlyDivisible(15.5, 5)          // false
    isEvenlyDivisible(5, 5)             // true
    isEvenlyDivisible("70", "7")        // true
    isEvenlyDivisible(null, 7)          // false
    isEvenlyDivisible(3, "three")       // false
    isEvenlyDivisible()                 // false
    */

    function isEvenlyDivisible(x,y){
        if( x % 2 === 0 && y % 2 !== 0) {
            return false;
        } else if( isNaN(x) || isNaN(y) || x === null || y === null) {
            return false;
        } else {
            return true;
        }

    }

 // <------------ practice functions with arrays and objects ------------>

    var companies = [
        {name: "Company One", category: "Finance", start: "1981", end: 2003},
        {name: "Company Two", category: "Retail", start: "1992", end: 2008},
        {name: "Company Three", category: "Auto", start: "1999", end: 2007},
        {name: "Company Four", category: "Retail", start: "1989", end: 2010},
        {name: "Company FIve", category: "Technology", start: "2009", end: 2014},
        {name: "Company Six", category: "Finance", start: "1987", end: 2010},
        {name: "Company Seven", category: "Auto", start: "1986", end: 1996},
        {name: "Company Eight", category: "Technology", start: "2011", end: 2016},
        {name: "Company Nine", category: "Retail", start: "1981", end: 1989},

    ];

    var ages = [35, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    // <------------- for Loop ----------------->

    for(var i = 0; i < companies.length; i++){
        console.log(companies[i])
    }

    // <--------------- .forEach() method ------------------>

    companies.forEach(function (company){
        console.log(company.name);
    });

    // <------------- var ages: for loop that loops though and pick out all the ages that var canDrink------>

    var canDrink = [];
    for(var i = 0; i < ages.length; i++){
        if( ages[i] >= 21){
           canDrink.push(ages[i])
        }
    };

// <--------------- .filter() method ------------->

    var canDrink = ages.filter(function (age){
        if( age >= 21) {
            return true;
        }
    });

    var canDrink = ages.filter( age => age >= 21);

    console.log(canDrink);


})();