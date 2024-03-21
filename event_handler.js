
let participants = [];

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value entered by the user
    let userInput = document.getElementById("userInput").value;
    if (!participants.includes(userInput)){
        participants.push(userInput);
    }

    // Call a function in your JavaScript file and pass the user input
    processUserInput(userInput);
}

// Function to process user input
function processUserInput(input) {
    // Do something with the user input, for example, log it to the console
    console.log("User input:", input);
}

// Add event listener to the form for form submission
document.getElementById("userInputForm").addEventListener("submit", handleSubmit);