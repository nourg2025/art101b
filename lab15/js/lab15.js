// Replace the URL with the API endpoint you want to use
URL = "https://your-api-url/api/random";

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
        // Any additional parameters you want to include
        // data: { count: 5, offset: 0 },
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // Process the API response as needed
        // For example, displaying clues in a list
        var cluesList = "<ul>";
        $.each(data, function(index, clue) {
            cluesList += "<li>" + clue.question + "</li>";
        });
        cluesList += "</ul>";

        // Display the clues on the webpage
        $("#output").html(cluesList);
    })
    // If the request fails
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Error: " + textStatus + " - " + errorThrown);
        // Handle the error as needed
        $("#output").html("Error fetching data from the API");
    });
});