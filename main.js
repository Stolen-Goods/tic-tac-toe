const squareOne = document.querySelector(".square-1");
const squareTwo = document.querySelector(".square-2");
const squareThree = document.querySelector(".square-3");
const squareFour = document.querySelector(".square-4");
const squareFive = document.querySelector(".square-5");
const squareSix = document.querySelector(".square-6");
const squareSeven = document.querySelector(".square-7");
const squareEight = document.querySelector(".square-8");
const squareNine = document.querySelector(".square-9");
const header = document.querySelector("h1");
const button = document.getElementById("button");

const gameBoard = {
  board: [
    squareOne,
    squareTwo,
    squareThree,
    squareFour,
    squareFive,
    squareSix,
    squareSeven,
    squareEight,
    squareNine,
  ],
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const playerOne = new Player("Matt", "X");
const playerTwo = new Player("Crystal", "O");

(function game() {
  let gameTurnCount = 1;
  let playerTurn = 1;
  gameBoard.board.forEach((square, i) => {
    header.textContent = `${playerOne.name}'s Turn`;
    square.addEventListener("click", () => {
      if (playerTurn === 1 && square.textContent === "") {
        square.textContent = playerOne.marker;
        gameBoard.board[i] = playerOne.marker;
        header.textContent = `${playerTwo.name}'s Turn`;
        playerTurn = 2;
        gameTurnCount++;
        winCondition();
        if (winCondition()) {
          header.textContent = `${playerOne.name} Wins!`;
          playerTurn = 0;
          button.classList.remove("hidden");
        }
        if (gameTurnCount === 10) {
          header.textContent = "It's a Tie!";
          button.classList.remove("hidden");
        }
      } else if (playerTurn === 2 && square.textContent === "") {
        square.textContent = playerTwo.marker;
        gameBoard.board[i] = playerTwo.marker;
        header.textContent = `${playerOne.name}'s Turn`;
        playerTurn = 1;
        gameTurnCount++;
        winCondition();
        if (winCondition()) {
          header.textContent = `${playerTwo.name} Wins!`;
          playerTurn = 0;
          button.classList.remove("hidden");
        }
      }
    });
  });
})();

button.addEventListener("click", () => {
  location.reload();
});

function winCondition() {
  if (
    gameBoard.board[0] === gameBoard.board[1] &&
    gameBoard.board[0] === gameBoard.board[2]
  ) {
    return true;
  }
  if (
    gameBoard.board[3] === gameBoard.board[4] &&
    gameBoard.board[3] === gameBoard.board[5]
  ) {
    return true;
  }
  if (
    gameBoard.board[6] === gameBoard.board[7] &&
    gameBoard.board[6] === gameBoard.board[8]
  ) {
    return true;
  }
  if (
    gameBoard.board[0] === gameBoard.board[3] &&
    gameBoard.board[0] === gameBoard.board[6]
  ) {
    return true;
  }
  if (
    gameBoard.board[1] === gameBoard.board[4] &&
    gameBoard.board[1] === gameBoard.board[7]
  ) {
    return true;
  }
  if (
    gameBoard.board[2] === gameBoard.board[5] &&
    gameBoard.board[2] === gameBoard.board[8]
  ) {
    return true;
  }
  if (
    gameBoard.board[0] === gameBoard.board[4] &&
    gameBoard.board[0] === gameBoard.board[8]
  ) {
    return true;
  }
  if (
    gameBoard.board[2] === gameBoard.board[4] &&
    gameBoard.board[2] === gameBoard.board[6]
  ) {
    return true;
  }
}
