window.onload = function() {
  //add event listener to both buttons
  let reDraw = document.getElementById("reDraw");
  let startTimer = document.getElementById("startTimer");

  let icons = document.querySelectorAll("p");
  let cardNumber = document.querySelector(".cardNumber");

  //function to render the card
  function renderCard() {
    //1- two random numbers and assign them to number and suit
    let suit = ["♦", "♥", "♠", "♣"][Math.floor(Math.random() * 4)];
    let number = Math.floor(Math.random() * 13);
    number =
      number < 11
        ? number > 1
          ? number
          : number === 1
          ? "A"
          : "J"
        : number === 11
        ? "Q"
        : "K";
    //2- re-assign innerHTML of suit and number
    icons.forEach(icon => (icon.innerHTML = suit));
    suit === "♦" || suit === "♥"
      ? icons.forEach(icon => icon.classList.add("isRed"))
      : icons.forEach(icon => icon.classList.remove("isRed"));
    cardNumber.innerHTML = number;
  }

  //calling the function
  renderCard();

  //calling function when button pressed
  reDraw.addEventListener("click", renderCard);

  //1- calling function when timer pressed
  let timerId = null;
  function start() {
    renderCard();
    timerId = setInterval(renderCard, 10000);
  }

  function stop() {
    clearInterval(timerId);
  }

  startTimer.addEventListener("click", function() {
    if (startTimer.innerText === "Re-draw every 10 seconds") {
      startTimer.innerText = "Stop drawing";
      start();
    } else {
      startTimer.innerText = "Re-draw every 10 seconds";
      stop();
    }
  });
};
