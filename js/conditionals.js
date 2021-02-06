"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//     function analyzeColor(name) {
//         if(name === "blue") {
//             return name + " is the color of the sky.";
//         } else if (name === "red") {
//             return " Strawberries are red.";
//         } else {
//             return "I dont know anything about cyan."
//         }
// }

// console.log(analyzeColor("red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var colorName = randomColor;
//     switch (colorName) {
//         case"blue":
//             console.log(colorName + " is the color of the sky.");
//             break;
//         case "red" :
//             console.log(" Strawberries are red.");
//             break;
//         default:
//             console.log("I dont know anything about cyan.");
//             break;

    // }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
    // var userColor = prompt("What is you favorite color?");
    // analyzeColor(userColor);
    // alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


//     function calculateTotal(luckyNum, totalAmount) {
//      var luckyNum1 = totalAmount * .10;
//      var luckyNum2 = totalAmount * .25;
//      var luckyNum3 = totalAmount * .35;
//      var luckyNum4 = totalAmount * .50;
//
//         if(luckyNum === 1) {
//             return " ! You get a 10% discount and you pay $" + (totalAmount - luckyNum1) + "!";
//         } else if(luckyNum === 2) {
//             return " ! You get a 25% discount and you pay $" + (totalAmount - luckyNum2) + "!";
//         } else if(luckyNum === 3) {
//             return " ! You get a 35% discount and you pay $" + (totalAmount - luckyNum3) + "!";
//         } else if(luckyNum === 4) {
//             return " ! You get a 50% discount and you pay $" + (totalAmount - luckyNum4) + "!";
//         } else if(luckyNum === 5) {
//             return " ! You get it all free!"
//         } else {
//             return " You have no discount";
//         }
// }
//
//     console.log(calculateTotal(2, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
//
//     var totalBill = prompt("What is your total bill");
//     alert("Your luck number was " + luckyNumber + calculateTotal(luckyNumber,totalBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var chooseNum = confirm("would you like to enter a number?");
 // var userNum = prompt("which number?");

// switch (((((chooseNum === true) || chooseNum % 2 === 0)|| chooseNum >= 1) || chooseNum >= 0)){
//     case true:
//         prompt("which number?");
//         break;
//     case chooseNum % 2 === 0:
//         alert(chooseNum + ". This number is even!");
//         break;
//     case chooseNum:
//         alert("Your number Plus 100 is " + (Number(chooseNum) + 100) + "!" );
//         break;
//     case chooseNum >=1:
//         alert("Your number is positive!");
//         break;
//     case chooseNum <= 0:
//         alert("Your number is negative!");
//     default:
//         alert("That's not a number.");
}

// var chooseNum = confirm("would you like to enter a number?");
// function chooseNumber(w) {
//     if (w === true) {
//         prompt("which number?")
//     } else {
//         return alert("Ok bye!");
//     }
// }
//
// var x = Number(chooseNum);
//     if(x % 2 === 0) {
//         alert(chooseNum + ". This number is even!");
//     } else {
//         alert(chooseNum + ". This number is odd!");
//     }



//  var userPick = confirm("would you like to enter a number?");
// // var userNumber = prompt("which number?");
//
//  function chooseNumber(w) {
//      if (w === true) {
//          prompt("which number?")
//      } else {
//          return alert("That is NOT a number!");
//      }
//  }
//
// // function numberIsOddOrEven(x){
//     if( w % 2 === 0) {
//         alert("This number is even!");
//     }  else {
//         alert("This number is odd!");
//     // }
// }
//
// // function numberPlusHundred(y){
//       alert("Your number Plus 100 is " + (w + 100) + "!" );
//
// // }
// // function isPositiveOrNegative(z){
//     if(w >= 1){
//         alert("Your number is positive!");
//     } else if(z <= 0) {
//         alert("Your number is negative!");
//      }
// // }
// }
//  console.log(chooseNumber(userPick));
//  console.log(numberIsOddOrEven(userNumber));
// console.log(numberPlusHundred(Number(userNumber)));
// console.log(isPositiveOrNegative(userNumber));


//    if(userNumber %= 2) {
//         alert("This number is even!");
//     } else{
//         alert("This number is odd!");
//     }
//     if(userNumber === true){
//         alert("Your number + 100 is " + (userNumber + 100));
//     }
//     if(userNumber >= 1){
//         alert("Your number is positive!");
//     } else if(userNumber <= 0) {
//         alert("Your number is negative!");
//     } else {
//     alert("That is NOT a number!");
// }


