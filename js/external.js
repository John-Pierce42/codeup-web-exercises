"use strict";
//console.log
console.log("Hello from external JavaScript");

//alert
alert("Welcome to my Website");

//prompt
var user = prompt("What is you favorite color?");
alert("Great " + user + " is my favorite color too");
//exercise 3
var lm = prompt("How many days did you rent Little Mermaid?");
alert("you rented Little Mermaid for " + lm + " days.");

var bb = prompt("How many days did you rent Brother Brear?");
alert("you rented Brother Brear for " + bb + " days.");

var h = prompt("How many days did you rent Hercules?");
alert("you rented Hercules for " + h + " days.");

alert("This is how much you have paid in total for the movies you rented: $" + ((lm * 3) + (bb * 3) + (h * 3)));

var googleRate = prompt("What is your pay rate at Google?");
var googleHour = prompt("How many hour did you work Google?");
var googlePay = googleRate * googleHour;
alert("you made $ " + googlePay);

var amazonRate = prompt("What is your pay rate at Amazon?");
var amazonHour = prompt("How many hour did you work at Amazon?");
var amazonPay = amazonRate * amazonHour;
alert("you made $ " + amazonPay);

var facebookRate = prompt("What is your pay rate at Facebook?");
var facebookHour = prompt("How many hour did you work at Facebook?");
var facebookPay = facebookRate * facebookHour;
alert("you made $ " + facebookPay);

var classSize = confirm("Is the class full?");
var classConflict = confirm("Are there schedule conflict?");
alert( "You are able to enroll " + (classSize && classConflict));


var personBought2 = true;
var offerExpired = false;
confirm("Are you a Premium member?");
alert("Do you ")

