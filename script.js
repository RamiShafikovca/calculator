let displayString = '0';
let a = 0, b = 0;
let op;
let miniDisplay = document.querySelector('div.miniDisplay');
const display = document.querySelector('div.display');
const ac = document.querySelector('div#ac');
const sign = document.querySelector('div#sign');
display.innerHTML = displayString;
miniDisplay.innerHTML = '';

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
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
        if (displayString == '0') displayString = element.innerHTML;
        else displayString += element.innerHTML;
        display.innerHTML = displayString;
    });
});

ac.addEventListener('click', () => {
    displayString = 0;
    display.innerHTML = displayString;
    miniDisplay.innerHTML = '';
    a = 0;
    b = 0;
});

sign.addEventListener('click', () => {
    if (displayString.charAt('0') == '-') {
        displayString = displayString.slice(1);
    } else if (displayString != '0') {
        displayString = '-' + displayString;
    }
    display.innerHTML = displayString;
});

document.querySelectorAll('div.operator').forEach((element) => {
    element.addEventListener('click', () => {
        a = parseInt(displayString);
        op = element.id;
        miniDisplay.innerHTML = displayString;
        switch (element.id) {
            case 'add':
                miniDisplay.innerHTML += ' +';
                break;
            case 'substract':
                miniDisplay.innerHTML += ' -';
                break;
            case 'multiply':
                miniDisplay.innerHTML += ' ×';
                break;
            case 'divide':
                miniDisplay.innerHTML += ' ÷';
                break;
        }
        displayString = '0';
        display.innerHTML = displayString;
    });
});

document.querySelector('div#equals').addEventListener('click', () => {
    b = parseInt(displayString);
    displayString = operate(op, a, b);
    display.innerHTML = displayString;
    miniDisplay.innerHTML = '';
})