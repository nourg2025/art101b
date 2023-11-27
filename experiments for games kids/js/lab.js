// lab.js

$(document).ready(function () {
    // Function to handle a click event on the game container
    $('#game-container').on('click', function () {
        // Change the text inside the game container
        $(this).html('<p>You clicked! Game in progress...</p>');
    });
    // You can add more game logic and functionality here as needed
});