// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = null;
    let previousInput = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.textContent = '0';
            } else if (value === '=') {
                if (operator && previousInput) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    operator = null;
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput && previousInput && operator) {
                    previousInput = calculate(previousInput, currentInput, operator);
                    display.textContent = previousInput;
                } else {
                    previousInput = currentInput;
                }
                currentInput = '';
                operator = value;
            } else {
                if (currentInput === '0' && value !== '.') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, b, operator) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (operator === '+') return (num1 + num2).toString();
        if (operator === '-') return (num1 - num2).toString();
        if (operator === '*') return (num1 * num2).toString();
        if (operator === '/') return (num2 === 0 ? 'Error' : (num1 / num2).toString());
    }
});
