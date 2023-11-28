// Function to handle drag start event
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Function to handle drag over event
function allowDrop(event) {
    event.preventDefault();
}

// Function to handle drop event
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
}

// Add event listeners to the bowl for drop
var bowl = document.getElementById("bowl");
bowl.addEventListener("dragover", allowDrop);
bowl.addEventListener("drop", drop);