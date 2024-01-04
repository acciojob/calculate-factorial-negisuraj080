//your JS code here. If required.
// Function to calculate factorial
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

// Get input from the user using prompt
const userInput = prompt("Enter a number to calculate its factorial:");

// Convert the user input to a number
const number = parseInt(userInput);

// Check if the input is a valid positive integer within the range [1, 10]
if (!isNaN(number) && Number.isInteger(number) && number >= 1 && number <= 10) {
    // Calculate factorial
    const factorial = calculateFactorial(number);

    // Display the result using alert
    alert(`The factorial of ${number} is ${factorial}`);
} else {
    // Display an error message if the input is invalid
    alert("Invalid input. Please enter a positive integer between 1 and 10.");
}

