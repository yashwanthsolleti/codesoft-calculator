// script.js

let currentInput = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
}

function calculate() {
    try {
        // Evaluate the expression
        const result = eval(display.textContent);
        // Update the display with the result
        display.textContent = result;
    } catch (e) {
        display.textContent = 'Error';
    }
}
