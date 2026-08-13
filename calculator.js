// calculator.js
// Helper functions for basic arithmetic operations required by the assignment.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // Handle division by zero: return null to indicate an error to the caller.
  if (b === 0) {
    return null;
  }
  return a / b;
}

// Driver function used by the UI. Accepts numeric inputs and an operator string.
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return NaN; // unknown operator
  }
}

// Convenience function to call from the browser console: calculateFromConsole(2,3,'+')
function calculateFromConsole(a, b, operator) {
  const result = calculate(Number(a), Number(b), operator);
  if (result === null) {
    console.warn('Division by zero is not allowed.');
  } else if (Number.isNaN(result)) {
    console.warn('Unknown operator. Use one of +, -, *, /.');
  } else {
    console.log(`${a} ${operator} ${b} = ${result}`);
  }
  return result;
}

// UI wiring: read values, perform calculation, and show result with division-by-zero warning.
document.addEventListener('DOMContentLoaded', function () {
  const num1El = document.getElementById('num1');
  const num2El = document.getElementById('num2');
  const opEl = document.getElementById('operator');
  const btn = document.getElementById('calcBtn');
  const resultEl = document.getElementById('result');

  btn.addEventListener('click', function () {
    const a = Number(num1El.value);
    const b = Number(num2El.value);
    const op = opEl.value;

    // Basic validation
    if (num1El.value === '' || num2El.value === '') {
      resultEl.textContent = 'Please enter both numbers.';
      resultEl.style.color = 'crimson';
      return;
    }

    const res = calculate(a, b, op);

    if (res === null) {
      resultEl.textContent = 'Warning: Division by zero is not allowed.';
      resultEl.style.color = 'crimson';
    } else if (Number.isNaN(res)) {
      resultEl.textContent = 'Error: Unknown operator.';
      resultEl.style.color = 'crimson';
    } else {
      resultEl.textContent = `Result: ${res}`;
      resultEl.style.color = 'black';
    }
  });
});

// Export functions to the window so they can be tested from the console if desired.
window.add = add;
window.subtract = subtract;
window.multiply = multiply;
window.divide = divide;
window.calculate = calculate;
window.calculateFromConsole = calculateFromConsole;