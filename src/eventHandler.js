import { UI } from './userInterface';
import Player from './Player/Player';
import Computer from './Computer/Computer';

// Mock
const player = Player();
const { gameboard } = player;

const computer = Player();
const computerGameboard = computer.gameboard;

const AI = Computer();

gameboard.randomizeShips();

computerGameboard.randomizeShips();

// Mock

const EventHandlers = (() => {
  function cellAttack(e) {
    const cell = e.target;
    // Get attack coordinates
    const row = parseInt(cell.getAttribute('data-x'), 10);
    const column = parseInt(cell.getAttribute('data-y'), 10);

    // Send attack to computer
    player.sendAttack([row, column], computer);

    // Load new computer board
    UI.loadComputerBoard(computer);
    if (computer.gameboard.allShipsSunk()) return UI.endGame('player');

    // Make computer attack player
    AI.attack(player);

    // Load new player board
    UI.loadPlayerBoard(player);
    if (player.gameboard.allShipsSunk()) return UI.endGame('computer');
    cellListener();
  }

  function cellListener() {
    // Add event listener to new computer board cells
    const computerBoardCells = Array.from(document.querySelectorAll('.computer .cell'));
    computerBoardCells.forEach((cell) => {
      if (!(cell.classList.contains('successful-attack') || cell.classList.contains('missed-attack'))) cell.addEventListener('click', cellAttack);
    });
  }
  function init(player, computer) {
    UI.loadPlayerBoard(player);
    UI.loadComputerBoard(computer);

    const startButton = document.querySelector('.start');
    const restartButton = document.querySelector('.restart');
    const randomizeButton = document.querySelector('.randomize');

    startButton.addEventListener('click', () => {
      UI.startGame();
      cellListener();
    });

    restartButton.addEventListener('click', () => {
      // TODO: create new mock instead of reloading
      window.location.reload();
    });

    randomizeButton.addEventListener('click', () => {
      gameboard.removeShips();
      computerGameboard.removeShips();
      gameboard.randomizeShips();
      computerGameboard.randomizeShips();

      UI.loadPlayerBoard(player);
      UI.loadComputerBoard(computer);
      cellListener();
    });
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  EventHandlers.init(player, computer);
});
