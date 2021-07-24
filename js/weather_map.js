
    "use strict"





        // $.get("https://api.openweathermap.org/data/2.5/forecast", {
        //     appid: OPEN_WEATHER_APPID,
        //     lat: 29.423017,
        //     lon: -98.48527,
        //     units: "imperial"
        // }).done(function (data){
        //     console.log(data)
        // });



function oneCall(lng, lat) {
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appid: OPEN_WEATHER_APPID,
        lat: lat,
        lon: lng,
        units: "imperial"
    }).done(function (data) {

        // console.log(data.daily[i].humidity);

        var html = "";
        for (var i = 0; i < data.daily.length; i++) {

            var unix = data.daily[i].dt;
            var mill = unix * 1000;
            var dateObject = new Date(mill);
            var date = dateObject.toLocaleDateString();

            html += "<div class='card m-3' style='width: 12rem'>"
            html += "<div class='card-header' style='background-color: darkblue; color:white;'>"
            html += "<p>" + date + "</p>"
            html += "</div>"
            html += "<div class='card-body'>"
            html += "<p>" + data.daily[i].temp.min + "&#8457" + " / " + data.daily[i].temp.max + "&#8457" + "</p>"
            html += "<p>" + "Description: " + data.daily[i].weather[0].description + "</p>"
            html += "<p>" + "Humidity: " + data.daily[i].humidity + "</p>"
            html += "<p>" + "Winds: " + data.daily[i].wind_speed + " mph" + "</p>"
            html += "<p>" + "Presure: " + data.daily[i].pressure + "</p>"
            html += "</div>"
            html += "</div>"
            console.log(data);

        }

        $(".row").html(html);

        function icons(){}

    });
}
        // $.get("http://openweathermap.org/img/w/[icon].png"), {
        //     appid: OPEN_WEATHER_APPID
        // }

    var weatherIcons = [
        {pic:"animated/day.svg", name:"clear-day"},
        {pic:"animated/night.svg", name:"clear-night"},
        {pic:"animated/rainy-1.svg", name:"rain"},
        {pic:"animated/snowy-1.svg", name:"snow"},
        {pic:"animated/snowy-1.svg", name:"sleet"},
        {pic:"animated/weather.svg", name:"wind"},
        {pic:"animated/weather.svg", name:"fog"},
        {pic:"animated/cloudy-day-3.svg", name:"cloudy"},
        {pic:"animated/cloudy-day-3.svg", name:"partly-cloudy-day"},
        {pic:"animated/cloudy-day-3.svg", name:"partly-cloudy-day"},
    ]



    mapboxgl.accessToken = mapBoxToken;

    var coordinates = document.getElementById("coordinates")

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.48527,29.423017]
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.48527, 29.423017])
        .addTo(map);


    function onDragEnd() {
        console.log("hey where getting here");
        var lngLat = marker.getLngLat();
        oneCall(lngLat.lng, lngLat.lat);
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);

    oneCall(-98.48527, 29.423017);
