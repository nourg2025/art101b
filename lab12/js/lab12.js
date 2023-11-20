//* Author: Nour Gabsi <ngabsi@ucsc.edu>
//* Created: November 20, 2023
//* License: Public Domain
//*

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
    var len = str.length; // or use let or const
    var mod = len % 4;    // or use let or const
    if (mod == 0) {
        return "Gryffindor";
    } else if (mod == 1) {
        return "Ravenclaw";
    } else if (mod == 2) {
        return "Slytherin";
    } else if (mod == 3) {
        return "Hufflepuff";
    }
}
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into" + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})