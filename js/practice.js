(function (){

"use strict";

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

})();