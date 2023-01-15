let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw another cart?";
  } else if (sum === 21) {
    message = "Wooohooo! You got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let card = 0; card < cards.length; card++) {
    cardEl.textContent += cards[card] + " ";
  }
}

function newCard() {
  let thirdCard = 5;
  cards.push(thirdCard);
  sum += thirdCard;
  renderGame();
}
