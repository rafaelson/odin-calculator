let operation;
let value1 = null;
let value2 = null;
const displayBot = document.querySelector(".display-bot");

document.querySelectorAll(".number").forEach((elem) => {
  elem.addEventListener("click", () => {
    //console.log(elem.textContent);
    displayBot.textContent += elem.textContent;
  });
});

document.querySelectorAll(".operator").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (value1 == null) {
      value1 = Number(displayBot.textContent);
      if (operation != "=") {
        operation = elem.textContent;
      } else {
        resetValues();
      }
      cleanDisplay();
    } else {
      value2 = Number(displayBot.textContent);
      cleanDisplay();
    }
    if (value1 != null && value2 != null && elem.textContent == "=") {
      selectOperation(operation);
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
      break;
    case "×":
      break;
    case "÷":
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
