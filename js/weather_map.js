
    "use strict"





        // $.get("https://api.openweathermap.org/data/2.5/forecast", {
        //     appid: OPEN_WEATHER_APPID,
        //     lat: 29.423017,
        //     lon: -98.48527,
        //     units: "imperial"
        // }).done(function (data){
        //     console.log(data)
        // });




        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appid: OPEN_WEATHER_APPID,
            lat: 29.423017,
            lon: -98.48527,
            units: "imperial"
        }).done(function (data) {



            // console.log(data.daily[i].humidity);

                var html = "";
            for (var i = 0; i < data.daily.length; i++) {

                var unix = data.daily[i].dt;
                var mill = unix * 1000;
                var dateObject = new Date(mill);
                var date = dateObject.toLocaleDateString();

                html += "<div class='card' style='width: 10rem'>"
                html += "<div class='card-header'>"
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


        });

        // $.get("http://openweathermap.org/img/w/[icon].png"), {
        //     appid: OPEN_WEATHER_APPID
        // }


    mapboxgl.accessToken = mapBoxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

    var marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([-98.4916, 29.4252])
    .setPopup()
    .addTo(map);