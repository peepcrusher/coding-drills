// Firebase Chat
var config = {
  apiKey: "AIzaSyAKHOtie1GwnGOGBPk5MUH35WF-P-_GCmQ",
  authDomain: "practice-b1a35.firebaseapp.com",
  databaseURL: "https://practice-b1a35.firebaseio.com",
  projectId: "practice-b1a35",
  storageBucket: "practice-b1a35.appspot.com",
  messagingSenderId: "381077180335"
};
  // Initialize Firebase
  firebase.initializeApp(config);

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function () {

  // -------------------- Your Code Here --------------------

  // Setup an on "child_added" listener on our database
  // The first argument to the callback function we hand it will be the child
  // entry that was just added.
  database.ref().on("child_added", function (childSnapshot) {




    // create a new element `chatItem` that we will append into tho `chat-display`
    // after we give it some content
    var chatItem = $("<p>");


    // grab the value of the child entry that was just updated. This is the
    // chat message that was stored into our database, so we can store that as
    // the contents of `chatItem`
    chatItem.text(childSnapshot.val());


    $("#chat-display").append(chatItem);
  })
  // Append `chatItem` to the `chat-display`
 



  // Set up an on click listener on the submit button
  (document).on("click", "button[type=submit]", function (event) {
event.preventDefault();


var chatText = $("input[type=submit").val().trim();
$("#chat-input").val("");

database.ref().push(chatText);
  })


  // Grab the chat message the user has input and then clear the input area



  // Push the chat message into the database




  // --------------------- End Code Area --------------------

})

