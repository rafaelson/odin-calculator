let operation;
let value1 = null;
let value2 = null;
const displayBot = document.querySelector(".display-bot");

document.querySelector(".ac").addEventListener("click", () => {
  cleanDisplay();
  resetValues();
});

document.querySelector(".equal").addEventListener("click", () => {
  if (value1 == null) {
    return;
  } else {
    value2 = Number(displayBot.textContent);
    cleanDisplay();
    selectOperation(operation);
  }
});

document.querySelectorAll(".number").forEach((elem) => {
  elem.addEventListener("click", () => {
    displayBot.textContent += elem.textContent;
  });
});

document.querySelectorAll(".operator").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (value1 == null) {
      value1 = Number(displayBot.textContent);
      operation = elem.textContent;
      cleanDisplay();
    }
  });
});

function cleanDisplay() {
  displayBot.textContent = "";
}

function resetValues() {
  value1 = null;
  value2 = null;
}

function selectOperation(op) {
  switch (op) {
    case "+":
      displayBot.textContent = add();
      break;
    case "-":
      displayBot.textContent = sub();
      break;
    case "×":
      displayBot.textContent = mul();
      break;
    case "÷":
      displayBot.textContent = div();
      break;
    case "=":
      break;
  }
  resetValues();
}

function add() {
  return value1 + value2;
}

function sub() {
  return value1 - value2;
}

function mul() {
  return value1 * value2;
}

function div() {
  return value1 / value2;
}
