/*
    Links to an external site.
*/

// FizzBuzz function
function fizzBuzz() {
    // Initialize an empty string to store the output
    let outputString = "";

    // Loop through numbers 1 to 200
    for (let num = 1; num <= 200; num++) {
        let str = "";

        // Check if the number is a multiple of 3
        if (num % 3 === 0) {
            str += "Fizz";
        }

        // Check if the number is a multiple of 5
        if (num % 5 === 0) {
            str += "Buzz";
        }

        // Check if the number is a multiple of 7
        if (num % 7 === 0) {
            str += "Boom";
        }

        // If the number is not a multiple of 3, 5, or 7, use the number itself
        if (str === "") {
            str = num.toString();
        }

        // Add the current result to the output string
        outputString += str + "<br>";
    }

    // Output the final string to the "output" div
    $("#output").html(outputString);
}

// Call the FizzBuzz function
fizzBuzz();