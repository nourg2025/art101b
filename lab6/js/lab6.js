// Author: Nour Gabsi <ngabsi@ucsc.edu>
// Created: 27 October

// Define Variables
myTransport = ["Ford Taurus", "bus", "plane", "walk"];

// create an object for my main ride
MyMainRide = {
    make: "Ford",
    model : "Taurus",
    color : "Rusty",
    year : 1995,
    // we can define a function within our object (called a method)
    // that uses the value of year above (using this.year)
    age : function() {
        return 2022 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use:", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("MyMainRide: <pre>",
JSON.stringify(MyMainRide, null, '\t'),"</pre>");