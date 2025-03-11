import "../css/styles.css";
import goblinImage from "./img/goblin.png";

const createGameBoard = () => {
  const board = document.createElement("div");
  board.className = "game-board";
  document.body.appendChild(board);

  for (let i = 0; i < 16; i += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    board.appendChild(cell);
  }
};

const moveGoblin = () => {
  const cells = document.querySelectorAll(".cell");
  const randomIndex = Math.floor(Math.random() * cells.length);

  const goblin = document.getElementById("goblin");
  cells[randomIndex].appendChild(goblin);
};

const init = () => {
  createGameBoard();

  const goblin = document.createElement("img");
  goblin.src = goblinImage;
  goblin.id = "goblin";

  const cells = document.querySelectorAll(".cell");
  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].appendChild(goblin);

  setInterval(moveGoblin, 1000);
};

window.onload = init;
