function startGreetingTimer(message, seconds, callback) {
  setTimeout(() => {
    document.getElementById('output').textContent = message;
    callback(); 
  }, seconds * 1000);
}

document.getElementById('startBtn').addEventListener('click', () => {
  startGreetingTimer('message', 3, () => alert('Time is up!'));
});

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Ділення на нуль неможливе!';
    default:
      return 'Invalid operation';
  }
}

function showResult() {
  const a = parseFloat(prompt('Введіть перше число:'));
  const b = parseFloat(prompt('Введіть друге число:'));
  const operation = prompt('Введіть операцію (+, -, *, /):');
  const result = calculate(a, b, operation);
  alert(`Результат: ${result}`);
}

document.getElementById('calcBtn').addEventListener('click', showResult);

function createClickCounter() {
  let count = 0; 
  return function() {
    count++;
    console.log(`Кількість натискань: ${count}`);
  };
}

const counter = createClickCounter();

document.getElementById('countBtn').addEventListener('click', counter);
