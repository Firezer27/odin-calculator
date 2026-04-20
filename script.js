function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(arr) {
  return arr.reduce((total, num) => total * num);
}

function divide(a, b) {
  if (a == b) {
    return;
  }
  return a / b;
}
function operate(operator, a, b) {
  switch (operate) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "+":
      add(a, b);
      break;
    default:
      return;
  }
}
