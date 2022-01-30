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
