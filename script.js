let num1 = 0;
let operator = '';
let num2 = 0;
let displayText = '';

let activeNum = 'num1';

const display = document.querySelector('h1');
const numBtns = document.querySelectorAll('.number');
const opBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        updateDisplay(e.target.innerText);      
        setNum(e.target.innerText);
    });
});

opBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        setOperator(e.target.innerText);
    });
});

equalBtn.addEventListener('click', () => {
    operate(operator, num1, num2);
});

clearBtn.addEventListener('click', () => {
   
});

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    };
    display.innerText = result;
};

function setNum(num) {
    
};

function setOperator(symbol) {
    operator = symbol;
};

function updateDisplay(num) {
    displayText += num;
    display.innerText = displayText.substring(0, 8);
};
