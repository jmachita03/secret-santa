
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
    displayNewParticipant(userInput);
    // displayAllParticipants(participants);
    displayAllParticipants2(participants);

}

// Function to process user input
function processUserInput(input) {
    // Do something with the user input, for example, log it to the console
    console.log("User input:", input);
}

function displayNewParticipant(particip) {
    // Get a reference to an element where you want to display the message
    let messageElement = document.getElementById("message");
    if (!messageElement) {
        messageElement = document.createElement("div");
        messageElement.id = "message";
        document.body.appendChild(messageElement);
    }

    // Create the message
    let message = "New participant added: " + particip + "\n";

    // Display the message in the specified element
    messageElement.innerText = message;
  }

  function displayAllParticipants(myParticipants) {
    // Get a reference to an element where you want to display the message
    let messageElement = document.getElementById("message2");
    if (!messageElement) {
        messageElement = document.createElement("div");
        messageElement.id = "message2";
        document.body.appendChild(messageElement);
    }

    // Create the message
    let message = "Our Pollyanna Partcipants: ";

    for (let i = 0; i < myParticipants.length; i++) {
        // Access each element of the array using index i
        if (i != 0) {
            message = message + ", "
        }
        message = message + myParticipants[i]
    }

    // Display the message in the specified element
    messageElement.innerText = message;
  }

  function displayAllParticipants2(myParticipants) {
    // Get a reference to an element where you want to display the list
    let listContainer = document.getElementById("listContainer");
    if (!listContainer) {
        listContainer = document.createElement("div");
        listContainer.id = "listContainer";
        document.body.appendChild(listContainer);
    }

    let header = document.createElement("h4");
    header.textContent = "Our Pollyanna Participants";

    // Create an unordered list element
    let ul = document.createElement("ul");

    // Loop through the participants and create a list item for each
    for (let i = 0; i < myParticipants.length; i++) {
        // Create a list item
        let li = document.createElement("li");
        
        // Set the text content of the list item to the current participant
        li.textContent = myParticipants[i];

        // Append the list item to the unordered list
        ul.appendChild(li);
    }

    // Remove any existing content in the list container
    listContainer.innerHTML = '';

    // Append the unordered list to the container element
    listContainer.appendChild(header);
    listContainer.appendChild(ul);
}



  

// Add event listener to the form for form submission
document.getElementById("userInputForm").addEventListener("submit", handleSubmit);