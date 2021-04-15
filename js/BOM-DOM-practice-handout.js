

//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!

// var changeSizeBtn = document.getElementById("changeBoxSize")
//     changeSizeBtn.addEventListener("click", function (e){
//         console.log(e);
//         var targetBox = document.getElementById("box")
//         targetBox.style.height = "500px";
//         targetBox.style.width = "500px";
//
//     })

        $("#changeBoxSize").click(function (e){
            $("#box").css("height", "500px").css("width","500px")
        })

//TODO: I have two CSS classes - toggleClass1 and toggleClass1 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!

var toggleBtn = document.getElementById("toggleClass");
console.log(toggleBtn);
toggleBtn.addEventListener("click", function (e){
    var toggleBox = document.getElementById("box")
    // toggleBox.setAttribute("class", "toggleClass1");

    if(toggleBox.getAttribute("class") === "toggleClass1"){
        toggleBox.setAttribute("class", "toggleClass2");
    } else if(toggleBox.getAttribute("class") === "toggleClass2"){
        toggleBox.setAttribute("class", "toggleClass1");
    } else {
        toggleBox.setAttribute("class", "toggleClass1")
    }
})


// function toggle (){
//     var toggle1 = $(".toggleClass1");
//     var toggle2 = $(".toggleClass2");
//     var box = $("#box");
//     if(box == toggle1){
//         $("#box").toggleClass("toggleClass2")
//     } else if (box == toggle2){
//         $("#box").toggleClass("toggleClass1")
//     } else {
//         $("#box").toggleClass("toggleClass1")
//     }
// }
//
//     $("#toggleClass").click(function (){
//         toggle();
//     })





//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]
//  var boxInfo = document.getElementById("boxInfo");
// boxInfo.addEventListener("hover",function (){
//
// })

$("#box").hover(function (){
    $("#boxInfo").html("hello!");
}, function (){
    $("#boxInfo").html("")
})
//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the box should replace what was inside of the span #userName with the input's contents

var inputBtn = document.getElementById("inputBtn");
var userInput = document.getElementById("input");
var replaceSpan = document.getElementById("userName");

inputBtn.addEventListener("click", function (){
    userInput.value;
    replaceSpan.innerText = userInput.value;


    var inputArr = userInput.value.split("");
    inputArr[0] = inputArr[0].toUpperCase();
    var upperCased = inputArr.join("");

    replaceSpan.innerText = upperCased;

    userInput.value = "";
})

//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."

var inputBtn = document.getElementById("inputBtn");
var userInput = document.getElementById("input");
var replaceSpan = document.getElementById("userName");

inputBtn.addEventListener("click", function (){
    userInput.value;
    replaceSpan.innerText = userInput.value;


    var inputArr = userInput.value.split("");
    inputArr[0] = inputArr[0].toUpperCase();
    var upperCased = inputArr.join("");

    replaceSpan.innerText = upperCased;

    userInput.value = "";

    var helloUserDiv = document.getElementById("helloUser");

    setTimeout(function (){
        helloUserDiv.innerHTML = "Let me know if you want to play a Game...."
    }, 5000);

})
