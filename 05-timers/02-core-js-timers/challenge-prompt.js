// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
window.setTimeout(timer1, 5000);
function timer1(){
    alert("This is Question 1");
}


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function timer2(){
    alert("This is Question 2");
}
var pause2 = window.setTimeout(timer2, 15000)

// Remove the timer you just made for Question 2
clearTimeout(pause2);


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
window.setTimeout(timer3, 15000)
function timer3(){
    alert("This is Question 3");
}


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
var stop3 = window.setTimeout(timer33, 16 *1000)
function timer33(){
    alert("Question 3 part 2!");
}


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(stop3);

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
window.setTimeout(timer5, 11 * 1000)

function timer5(){
alert("Question 5 complete!");
var audio = new Audio('audio.mp3');
audio.play();
}

