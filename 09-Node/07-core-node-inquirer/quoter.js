var inquirer = require("inquirer");


var quotes = [
    {
      author: "Albus Dumbledore",
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities"
    },
    {
      author: "Sirius Black",
      quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals"
    }
  ]


console.log("Welcome to The Quoter!")
menu();
function menu (){
inquirer.prompt([
{
    type: "list",
    message: "What would you like to do?",
    choices: ["View a list of quotes", "Add a quote", "Exit"],
    name: "action"
},
]).then(function(userInput){
    switch (userInput.action) {

        case "View a list of quotes":
        listQuotes();
        break;

        case "Add a quote":
        addQuote();
        break;

        case "Exit":
        console.log("Bye Bye")
        break;

    }
    
})
}

var authors = [];

function listQuotes() {
    for(var i = 0; i < quotes.length; i++){
        authors.push(quotes[i].author)
    }
    inquirer.prompt([
        {
        type: "list",
        message: "Who would you like to hear a quote from?",
        name: "authorChoices",
        choices: authors
        }
    ]).then(function(userChoice){
        var index = authors.indexOf(userChoice.authorChoices)
        console.log(quotes[index].quote);
        menu();
    })
}

function addQuote() {
    inquirer.prompt([
        {
            type:"input",
            message: "Who said the quote you are going to input?",
            name: "author"
        },
        {
            type: "input",
            message: "What is the quote?",
            name: "quote"
        }
    ]).then(function(input){
        quotes.push({
            author: input.author,
            quote: input.quote
        })
        menu();
    })
}