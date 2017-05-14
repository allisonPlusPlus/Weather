$.get("http://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html(response.city);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");


if ("geolocation" in navigator){ //check geolocation available
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position){
            console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
        });
}else{
    console.log("Browser doesn't support geolocation!");
}

 $.get("https://api.darksky.net/forecast/9374c70872b17665a8bb166f1d503135/37.8267,-122.4233", function (response) {
   $("#degrees").html(response.currently.temperature);
   $("#weathertype").html(response.longitude);
 }, "jsonp");
