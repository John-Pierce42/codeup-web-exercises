"use strict"

 $('*').css('padding', '5px 0 5px 0');


// $(document).ready(function (){
//     var content = $("#header").html()
//     alert(content);
//
// });
$("body").css("margin", "20px 100px 20px 100px");
$("body").css({"background-image": "url( img/yohann-libot-f7NnOkM1yeU-unsplash.jpg)", "background-size" : "100% 100%", " background-repeat":"no-repeat", });
$("#header").css("text-align", "center");
$(".codeup").css("text-align", "center");
$("li").css({"list-style": "none", "font-size" : "20px"});

// $(".codeup").css("border", "1px solid red");
// $(".zombie-bgc").css({"background-color" : "#698362","color" : "rebeccapurple"});


// var clickHandler = function(e){
//     $(e.target).click("background-color", "#698362");
// }
//
// $("h1").click(clickHandler);


// ********************** defining functions ***************************

function clickHandler(e){
    $(e.target).css("background-color", "#698362");
};

$("h1").click(clickHandler);


function dblClickHandler(e){
    $(this).css("font-size", "18px");
};
$("p").dblclick(dblClickHandler)


function hover(e){
    $("li").css("color", "red");
}



// ******************************** out side of a function ******************
// $("h1").click(function (e){
//     $(this).css("background-color", "#698362")
// });

// $("p").dblclick(function (e){
//     $(e.target).css("font-size", "18px");
// })

$("li").hover(function (e){
    $(this).css("color", "red");
}, function (e){
    $(this).css("color", "black")
})