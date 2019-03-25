// ======== You are given NOTHING to start with 😱 ========
//require fs for reading files
var fs = require("fs");

var args = [];
var fullQuotes;
var person; 
var message = "That person never said anything famous";

for(var i = 2; i < process.argv.length; i++){
    args.push(process.argv[i]);
}

person = args.join(" ");

//use FS to read the file and split at the semicolon
fs.readFile("quotes.txt", "utf-8", function(err, data){
    fullQuotes = data.split(";");

    for(var i = 0; i < fullQuotes.length; i++){
        var quote = fullQuotes[i].split("-")

        if(quote[1].toLocaleLowerCase() === person){

            message = quote[0]
        }
    }


    console.log(message);
  
    
    
})