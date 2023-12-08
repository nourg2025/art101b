// Author: Nour Gabsi
// Created: December 7, 2023

const ENDPOINT = "https://xkcd.com/info.0.json";

$("#button").click(function () {
    const comicObj = {
        url: ENDPOINT,
        type: "GET",
        dataType: "json",
        success: comicSuccess,
        error: comicError
    };

    $.ajax(comicObj);
});

function comicSuccess(comicObj) {
    console.log("Here is everything", comicObj);
    const objTitle = comicObj.title;
    const objImg = comicObj.img;
    const objAlt = comicObj.alt;

    $("#output").append("<h2>" + objTitle + "</h2>");
    $("#output").append("<img src='" + objImg + "' alt='" + objAlt + "' />");
    $("#output").append("<p>" + objAlt + "</p>");
}

function comicError(data) {
}