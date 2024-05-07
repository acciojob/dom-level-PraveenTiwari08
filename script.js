// Get the target element
var targetElement = document.getElementById("level");

// Initialize the DOM level counter
var domLevel = 0;

// Loop through the parent elements until reaching the root element
while (targetElement.parentElement) {
    // Move to the parent element
    targetElement = targetElement.parentElement;
    // Increment the DOM level counter
    domLevel++;
}

// Display the DOM level
alert("The level of the element is: " + domLevel);
