// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function (data) {
        // do stuff
        console.log(data);

        // Access data and update HTML
        var outputDiv = $("#output");
        outputDiv.append("<h2>" + data.title + "</h2>");
        outputDiv.append("<img src='" + data.img + "' alt='" + data.alt + "' title='" + data.alt + "'>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
// Previous button click event
$("#output").on("click", "#prevBtn", function () {
    comicObj.num -= 1;
    getAndPutData();
});

// Next button click event
$("#output").on("click", "#nextBtn", function () {
    comicObj.num += 1;
    getAndPutData();
});

// Function to perform API call and update HTML
function getAndPutData() {
    var endpoint = "https://xkcd.com/" + comicObj.num + "/info.0.json";

    $.ajax({
        url: endpoint,
        type: "GET",
        dataType: "json",
        success: function (data) {
            // do stuff
            console.log(data);

            // Access data and update HTML
            var outputDiv = $("#output");
            outputDiv.empty(); // Clear previous content
            outputDiv.append("<h2>" + data.title + "</h2>");
            outputDiv.append("<img src='" + data.img + "' alt='" + data.alt + "' title='" + data.alt + "'>");
            outputDiv.append("<button id='prevBtn'>Previous</button>");
            outputDiv.append("<button id='nextBtn'>Next</button>");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Initial call to load the first comic
var comicObj = { num: 1 };
getAndPutData();