// index.js - purpose and description here
// Author: Nour Gabsi <ngabsi@ucsc.edu>
// Date: November 3 2023

// Constants

// Functions
function sortUserName() {
    var userName = window.prompt("Hello, what name needs repairing?");
    console.log("userName = ", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
    return nameSorted;
}

function main() {
    console.log("Main function started.");
    // the code that makes everything happen
}

// let's get this party started
main();

// Output
document.writeln("I've fixed your name: ",
sortUserName(), "</br>");