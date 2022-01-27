document.querySelectorAll(".button").forEach((elem) => {
  elem.addEventListener("click", () => {
    console.log(elem.textContent);
    display_bot.textContent += elem.textContent;
  });
});

const display_bot = document.querySelector(".display-bot");
