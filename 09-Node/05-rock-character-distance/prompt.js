
  var string = "ilovetowritecode";
  var character = "o"
  
  function distanceFrom(str, char) {
// ===================== YOUR WORK HERE =====================
var count = 0;
var newArr = [];

for(var i = 0; i < str.length; i++){

    for(var j = 0; j < str.length; j++){


      if(str[i] !== char && str[j] !== char) {
        count++
      }
      else if(str[i] === char){
        newArr.push(count);
        count = 0;
        break;
      }
    }
}





return newArr;
// ==========================================================
  }
  
  console.log(distanceFrom(string, character))
 