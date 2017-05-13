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
