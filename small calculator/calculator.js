let historyEl = document.querySelector(".history");
let currentEl = document.querySelector(".current");
let expression = "";

function appendNum(num) {
  expression += num;
  currentEl.textContent = expression;
}

function appendOp(op) {
  if (expression === "") return;
  expression += " " + op + " ";
  currentEl.textContent = expression;
}

function clearDisplay() {
  expression = "";
  historyEl.textContent = "";
  currentEl.textContent = "0";
}

function calculate() {
  try {
    historyEl.textContent = expression;
    let result = eval(expression);
    currentEl.textContent = result;
    expression = result.toString();
  } catch (e) {
    currentEl.textContent = "Error";
  }
}
