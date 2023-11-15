/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Nour Gabsi
   Date: November 17, 2023
*/

// Helper function to generate random text
function generateRandomText() {
    const text = "Lorem blipsum sit doodle, consectetur flibberish noodle. Sed do hiccup tempor wobble ut giggle et doodle magna waffle. Ut yippee ad minim boop, quis noodle exercitation jibberish laboris doodle ut aliquip ex ea fancy-pants consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem blipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem blipsum-like text
    return text.slice(randStart, randStart + randLen);
  }
  
  // Event listener for button click
  $("#make-convo").click(function() {
    // Get new fake dialogue
    const newText = generateRandomText();
    // Append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });