let operation;
let value1 = null;
let value2 = null;
let equalTrack = 0;
const displayBot = document.querySelector(".display-bot");

document.querySelector(".ac").addEventListener("click", () => {
  cleanDisplay();
  resetValues();
});

document.querySelector(".equal").addEventListener("click", equal);

document.querySelectorAll(".number").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (equalTrack == 1) {
      cleanDisplay();
      equalTrack = 0;
    }
    displayBot.textContent += elem.textContent;
  });
});

document.querySelectorAll(".operator").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (value1 == null) {
      value1 = Number(displayBot.textContent);
      operation = elem.textContent;
      cleanDisplay();
    } else {
      equal();
      operation = elem.textContent;
      value1 = Number(displayBot.textContent);
    }
  });
});

function cleanDisplay() {
  displayBot.textContent = "";
}

function equal() {
  if (value1 == null) {
    return;
  } else {
    equalTrack = 1;
    value2 = Number(displayBot.textContent);
    cleanDisplay();
    selectOperation(operation);
  }
}

function resetValues() {
  value1 = null;
  value2 = null;
}

function checkIfIntegerAndPrint(x) {
  if (!Number.isInteger(x)) {
    displayBot.textContent = x.toFixed(1);
  } else {
    displayBot.textContent = x;
  }
}

function selectOperation(op) {
  let result;
  switch (op) {
    case "+":
      result = add();
      break;
    case "-":
      result = sub();
      break;
    case "×":
      result = mul();
      break;
    case "÷":
      result = div();
      break;
  }
  checkIfIntegerAndPrint(result);
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
