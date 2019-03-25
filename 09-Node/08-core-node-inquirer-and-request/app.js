var inquirer = require("inquirer");
var request = require("request");

var key = "974be33690de6cb6cb11ae9c967590e0";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID="+key+"&q="


menu();

function menu (){
    inquirer.prompt([
        {
            type: "input",
            message: "What city would you like to search the weather for?",
            name: "city"
        }
    ]).then(function(input){
        
        request.get(queryURL + input.city, function(err, response, body){
            if (err) throw err;

            var info = JSON.parse(body)
          
            

            console.log("Name: " + info.name);
            console.log("Country: " + info.sys.country);
            console.log("Current Weather: " + info.weather[0].main);


        })
    })
}