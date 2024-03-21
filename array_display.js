// Function to display array elements on the webpage
function displayArray(myArray) {
    // Create a heading for the list
    const arrayContainer = document.getElementById('array-container');

    let heading = document.createElement("h3");
    heading.textContent = "Pollyanna Participants:";
    arrayContainer.appendChild(heading);
    // Check if the array is empty
    if (myArray.length === 0) {
        let paragraph = document.createElement("p"); // Create a <p> element
        paragraph.textContent = "Oh no you haven't added anyone to the Pollyanna!"; // Set the text content to indicate that the array is empty
        arrayContainer.appendChild(paragraph); // Append the <p> element directly to the <body> of the HTML document
    } else {
        // Create an unordered list
        let list = document.createElement("ul");

        // Loop through the array and create a list item for each element
        myArray.forEach(function(element) {
            let listItem = document.createElement("li"); // Create an <li> element
            listItem.textContent = element; // Set the text content of the <li> element to the array element
            list.appendChild(listItem); // Append the <li> element to the <ul> element
        });

        // Append the heading and list to the <body> of the HTML document
        arrayContainer.appendChild(list);
    }
}

function displayDictionary(myDictionary) {
    // Access the div container where we want to display the dictionary
    const dictionaryContainer = document.getElementById('dictionary-container');
    let heading = document.createElement("h3");
    heading.textContent = "Here are the results! Giver : Receiever";
    dictionaryContainer.appendChild(heading);

    // Create a <ul> element to hold the dictionary items
    const ul = document.createElement('ul');

    // Loop through the dictionary and create <li> elements for each key-value pair
    for (const key in myDictionary) {
        if (myDictionary.hasOwnProperty(key)) {
            // Create a <li> element for each key-value pair
            const li = document.createElement('li');
            // Set the text content of the <li> element to the key-value pair
            li.textContent = `${key}: ${myDictionary[key]}`;
            // Append the <li> element to the <ul> element
            ul.appendChild(li);
        }
    }

    // Append the <ul> element to the dictionary container
    dictionaryContainer.appendChild(ul);
}