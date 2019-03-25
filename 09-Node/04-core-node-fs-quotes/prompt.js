//require fs
var fs = require("fs");

var args = [];

var person;

var quote;

//handle names that are longer than 1 word
for(var i = 2; i < process.argv.length; i++){
args.push(process.argv[i])
};

//Turn name into single string
quote = args[args.length-1];

// get rid of the quote as well as the word said
args.pop(); args.pop();
//the last remaining elements should make up the name
person = args.join(" ");
//we can join the contents of this array later to get the final string
var fullQuote = [];

//add quotes around the quote
quote = '"' + quote + '"';
//the quote comes first
fullQuote.push(quote)
//then the dash signifying who said it
fullQuote.push("-")
//add the person
fullQuote.push(person)
//turn the array into string. each element seperated by a space.
fullQuote = fullQuote.join(" ");
//append it to the quotes.txt file

fs.appendFile("quotes.txt", ";"+fullQuote, function(err, data){
    console.log("Quote Added!")
});