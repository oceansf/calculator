let num1 = 0;
let operator = '';
let num2 = 0;

let displayStr = '0';

const display = document.querySelector('h1');
const numBtns = document.querySelectorAll('.number');
const opBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');

// Add listener to every num btn
numBtns.forEach(btn => {
    btn.addEventListener('click', () => populateDisplay(btn.textContent))
})

// Add listener to every op btn
opBtns.forEach(btn => {
    btn.addEventListener('click', () => console.log(btn.textContent))
})

clearBtn.addEventListener('click', () => {
    clear();
})

function operate(num1, operator, num2) {
    
};

function populateDisplay(text) {
    displayStr === '0'? displayStr = text : displayStr += text;
    display.textContent = displayStr;
};

function clear() {
    displayStr = '0';
    display.textContent = displayStr;
}