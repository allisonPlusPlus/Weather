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
            console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
             $.get("https://api.darksky.net/forecast/9374c70872b17665a8bb166f1d503135/37.8267,-122.4233", function (response) {
               $("#degrees").html(response.currently.temperature);
               $("#weathersummary").html(response.currently.summary);
             }, "jsonp");
        });
}else{
    console.log("Browser doesn't support geolocation!");
}
}

getWeather();
