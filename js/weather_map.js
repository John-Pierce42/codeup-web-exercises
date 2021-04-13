(function (){
    "use strict"

    mapboxgl.accessToken = mapBoxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });


$(document).ready(function (){




    $.get("https://api.openweathermap.org/data/2.5/weather", {
        appid: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data){
           console.log(data);

        });

});





$("h1").css("color", "red")








})()