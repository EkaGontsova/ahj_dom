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

const getRandomIndex = (currentIndex, length) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === currentIndex);
  return newIndex;
};

const moveGoblin = () => {
  const cells = document.querySelectorAll(".cell");
  const goblin = document.getElementById("goblin");
  const currentCell = Array.from(cells).findIndex((cell) =>
    cell.contains(goblin),
  );

  const newIndex = getRandomIndex(currentCell, cells.length);
  cells[newIndex].appendChild(goblin);
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
