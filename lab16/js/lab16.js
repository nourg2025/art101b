// Author: Nour Gabsi
// Created December 4, 2023
// 

const ENDPOINT = "https://xkcd.com/info.0.json";

$("#button").click(function(){
     
    const comicObj ={
        url:ENDPOINT,
        type: "GET",
        dataType: "json",
        success: comicSuccess,
        error: comicError

    }
    $.ajax(comicObj)

function comicSuccess(comicObj){
    console.log("Here's everything", comicObj);
    const objTitle = comicObj.title;
    const objImg =comicObj.img;
    const objAlt = comicObj.alt;

$("#output").append("<h2>" + objTitle)
$("#output").append("<img src='" + objImg + "' />" )
$("#output").append("<p>" + objAlt)
}

function comicError(data){
    
}

// // ajax function
// 
})

// $.ajax({
//     url: ENDPOINT,
//     type: "GET",
//     dataType : "json",

//     // what the api should do when successful
//     success: function(data){
//     // have it connect to xKCD
//     console.log(data)

//     },
//     error: function(jqXHR, textStatus, errorThrown){
//         console.log("Error:", textStatus, errorThrown);
//     }
// })