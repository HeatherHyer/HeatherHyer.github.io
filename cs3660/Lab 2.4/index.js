var playerTurn = true;
var computerMoveTimeout = 0;

// Returns an array of 9 <td> elements that make up the game board. The first 3
// elements are the top row, the next 3 the middle row, and the last 3 the
// bottom row.
function getGameBoard() {
    var gameBoardTable = document.getElementById("gameBoard");
    var result = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            result.push(gameBoardTable.rows[i].cells[j]);
        }
    }
    return result;
}

function start() {
    // Setup the click event for the "New game" button

    $("#newGameButton").click(newGame());
    // Create click-event listeners for each cell in the game board
    var cells = getGameBoard();
    for (let cell of cells) {
        console.log(cell);
        $(cell).click(function() { cellClicked(cell); });
    }

    // Call the newGame function to make sure the board is clear
    newGame();
}

function newGame() {
    clearTimeout(computerMoveTimeout);
    computerMoveTimeout = 0;
    var cells = getGameBoard();
    for (let cell of cells) {
      cell.innerHTML = "&nbsp";
    }
    playerTurn = true;
    document.querySelector("#turnInfo").textContent = "Your turn";
}

function cellClicked(cell) {
  if (playerTurn && cell.innerHTML === "&nbsp;") {
    cell.innerHTML = "X";
    cell.style = "color: red;";
    switchTurn();
  }
}

function switchTurn() {
    playerTurn = !playerTurn;
    setTimeout(function(){ makeComputerMove(); }, 2000);
    if (playerTurn) {
      document.querySelector("#turnInfo").textContent = "Your turn";
    }
    else {
      document.querySelector("#turnInfo").textContent = "Computer's turn";
    }
}

function makeComputerMove() {
  var cells = getGameBoard();
  for (let cell of cells) {
    if (cell.innerHTML === "&nbsp;") {
      cell.innerHTML = "O";
      cell.style = "color: blue;";
      switchTurn();
      return;
    }
  }
}
