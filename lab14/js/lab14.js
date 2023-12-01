// Lab 9 - Libraries and jQueries
// Nour Gabsi <ngabsi@ucsc.edu>
// 11/13/23

// make buttons in each section
$(".minor-section").append("<button class='special-button'>Make Special</button>");

$(".special-button").click(function(){ 
    $(this).parent().toggleClass("special");
    
    if ($(this).parent().hasClass("special")) {
        $(this).html("Make Unspecial");
    }
    else {
        $(this).html("Make Special");
    }
});

// Task X: Bonus!
$(".special-sections").append("<button class='bonus-button'>Task X: Bonus!</button>");

$(".bonus-button").click(function(){
    $(this).parent().toggleClass("special");
    
    if ($(this).parent().hasClass("special")) {
        $(this).html("Undo Task X");
    }
    else {
        $(this).html("Task X: Bonus!");
    }
});