// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
var deck = [];

function Card(int){
if(int > 0 && int <= 13){
    this.value = int;

}
else{
    this.value = 1;
}

this.print = function(){

    var printValue = this.value<10 ? "0" + this.value : this.value;
    console.log(`
    -----------
    |${printValue}       |
    |         |
    |         |
    |         |
    |         |
    |       ${printValue}|
    -----------
    `)
}

}





// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
function Deck( cards = []) {
this.cards = cards;
this.shuffle = function(){
    for(var i = 0; i < this.cards.length; i++){
        var temp; 
        var random = Math.floor(Math.random() * this.cards.length)
         temp = this.cards[random]
         this.cards[random] = this.cards[i]
         this.cards[i] = temp
    }
}
 
this.count = function(){
    return this.cards.length;
}

this.draw = function(){
    return this.cards.pop()
}
this.add = function(card){
    this.cards.push(card);
    this.shuffle();
}



}





// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------
module.exports.Card = Card;
module.exports.Deck = Deck;



// --------------------- End Code Area --------------------
