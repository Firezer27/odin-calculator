let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultDisplayed = false;

const display = document.querySelector(".display");

function updateDisplay(value) {
  display.innerText = value;
}

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
  if (b === 0) return "Can't divide by 0!";
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

function roundResult(value) {
  if (typeof value === "string") return value;
  return parseFloat(value.toFixed(10));
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const visibleText = e.target.innerText;
    const btnType = e.target.dataset.type;
    const btnAction = e.target.dataset.action;

    if (btnType === "number") {
      if (resultDisplayed) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        resultDisplayed = false;
      }
      if (operator === "") {
        firstNumber += visibleText;
        updateDisplay(firstNumber);
      } else {
        secondNumber += visibleText;
        updateDisplay(secondNumber);
      }
    } else if (btnAction === "operator") {
      if (firstNumber === "") return;
      if (firstNumber !== "" && secondNumber !== "") {
        const result = roundResult(
          operate(operator, firstNumber, secondNumber),
        );
        firstNumber = String(result);
        secondNumber = "";
        updateDisplay(firstNumber);
      }
      operator = visibleText;
      resultDisplayed = false;
    } else if (btnAction === "equal") {
      if (firstNumber === "" || operator === "" || secondNumber === "") return;
      const result = roundResult(operate(operator, firstNumber, secondNumber));
      updateDisplay(result);
      firstNumber = String(result);
      secondNumber = "";
      operator = "";
      resultDisplayed = true;
    } else if (btnAction === "delete") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      resultDisplayed = false;
      updateDisplay("0");
    } else if (btnType === "decimal") {
      if (operator === "") {
        if (firstNumber.includes(".")) return;
        firstNumber = firstNumber === "" ? "0." : firstNumber + ".";
        updateDisplay(firstNumber);
      } else {
        if (secondNumber.includes(".")) return;
        secondNumber = secondNumber === "" ? "0." : secondNumber + ".";
        updateDisplay(secondNumber);
      }
    }
  });
});
