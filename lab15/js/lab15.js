// Replace the URL with the API endpoint you want to use
URL = "https://api.adviceslip.com/advice";

// attach click action to button
$('#action').click(function(){
    // get data via ajax from the specified API endpoint
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        // The type of request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // Display the advice on the webpage
        $("#output").html("<p>Random Advice: <b>" + data.slip.advice + "</b></p>");
    })
    // If the request fails
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + " - " + errorThrown);
        // Handle the error as needed
        $("#output").html("Error fetching data from the API");
    });
});