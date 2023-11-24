/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Nour Gabsi
   Date: 11/23/23
*/

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepufff
//Depending on length mod 4

function sortingHat(str) {
    len = str.length;
    mod = str.length % 4;
     if (mod== 0) {
      myHouse = "Gryffindor";
     } 
      else if (mod == 1) {
      myHouse = "Ravenclaw";
     }
      else if (mod == 2) {
      myHouse = "Slytherin";
     }
     else if (mod == 3) {
      myHouse = "Hufflepuff";
     }
     return myHouse;
  }
  
  var myHouse = sortingHat("#input")
  
  $("#button").click(function(){
  //console.log("Button Clicked!");
  //var name = prompt("What is your name?");
  var name = $("#input").val();
  var myHouse = sortingHat(name)
  console.log("Sorting Hat: After thorough deliberation, I have placed you into " + myHouse)
  });
  //click listener for button
  $("#button").click(function(){
  //get value of input field
  $("input:text").val("");
  
  $("#output").html("Sorting Hat: After thorough deliberation, I have placed you into " + myHouse)
  
  });