var request = require("request");

var key = "974be33690de6cb6cb11ae9c967590e0";

var zip = process.argv[2]

var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zip+",us&APPID="+key;

request.get(queryUrl, function(err, response, body){
    if(err) throw err;

    // console.log(response);

    var forecast = JSON.parse(body).list
    // console.log(forecast);

    for(var i = 0; i < forecast.length; i++){
        console.log(forecast[i].dt_txt + " " + forecast[i].main.temp);
    }

})




