$.get("https://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html(response.city);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");

function getWeather() {
if ("geolocation" in navigator){ //check geolocation available
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var URL = "https://api.darksky.net/forecast/9374c70872b17665a8bb166f1d503135/" + lat + "," + long;
            console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
             $.get(URL, function (response) {
               $("#degrees").html(response.currently.temperature);
               $("#weathersummary").html(response.currently.summary);
              var icon = (response.currently.icon);
             if (icon === "clear-day") {
               $("#clear-day").removeClass("hidden");
             }
             else if (icon === "clear-night") {
               $("#clear-night").removeClass("hidden");
             }
             else if (icon === "partly-cloudy-day") {
               $("#partly-cloudy-day").removeClass("hidden");
             }
             else if (icon === "partly-cloudy-night") {
               $("#partly-cloudy-night").removeClass("hidden");
             }
             else if (icon === "cloudy") {
               $("#cloudy").removeClass("hidden");
             }
             else if (icon === "rain") {
               $("#rain").removeClass("hidden");
             }
             else if (icon === "sleet") {
               $("#sleet").removeClass("hidden");
             }
             else if (icon === "snow") {
               $("#snow").removeClass("hidden");
             }
             else if (icon === "wind") {
               $("#wind").removeClass("hidden");
             }
             else if (icon === "fog") {
               $("#fog").removeClass("hidden");
             }
             }, "jsonp");
        });
}else{
    console.log("Browser doesn't support geolocation!");
}
}

getWeather();
