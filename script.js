function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the arithmetic expression
        const result = Function('"use strict"; return (' + display.value + ')')();
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    const value = parseFloat(prompt("Enter the number to square:"));
    if (!isNaN(value)) {
        alert("The square is: " + (value * value));
    } else {
        alert("Invalid input.");
    }
}

function calculateSquareRoot() {
    const value = parseFloat(prompt("Enter the number to find the square root of:"));
    if (!isNaN(value)) {
        alert("The square root is: " + Math.sqrt(value));
    } else {
        alert("Invalid input.");
    }
}

function calculateCube() {
    const value = parseFloat(prompt("Enter the number to cube:"));
    if (!isNaN(value)) {
        alert("The cube is: " + (value * value * value));
    } else {
        alert("Invalid input.");
    }
}

function calculateDiagonal() {
    const value = parseFloat(prompt("Enter the side length of the square:"));
    if (!isNaN(value)) {
        alert("The diagonal is: " + (Math.sqrt(2) * value));
    } else {
        alert("Invalid input.");
    }
}
