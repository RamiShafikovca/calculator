let displayString = '0';
const display = document.querySelector('div.display');
display.innerHTML = displayString;

function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function  multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operation, a, b) {
    if (operation == 'add') {
       return add(a, b);
    } else if (operation == 'substract') {
       return substract(a, b);
    } else if (operation == 'multiply') {
        return multiply(a, b);
    } else if (operation == 'divide') {
        return divide(a, b);
    }
}

const numbers = document.querySelectorAll('.number');
numbers.forEach((element) => {
    element.addEventListener('click', () => {
        displayString += element.innerHTML;
        display.innerHTML = displayString;
    });
});