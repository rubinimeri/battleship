import { UI } from './userInterface';
import Player from './Player/Player';
import Computer from './Computer/Computer';

// Mock
const player = Player();
const { gameboard } = player;

const computer = Player();
const computerGameboard = computer.gameboard;

const AI = Computer();

gameboard.placeShip([0, 0], 5);
gameboard.placeShip([2, 0], 4);
gameboard.placeShip([5, 5], 3);
gameboard.placeShip([3, 1], 2);
gameboard.placeShip([9, 7], 1);

computerGameboard.placeShip([0, 0], 5);

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

    // Add event listener to new computer board cells
    const computerBoardCells = Array.from(document.querySelectorAll('.computer .cell'));
    computerBoardCells.forEach((cell) => {
      if (!(cell.classList.contains('successful-attack') || cell.classList.contains('missed-attack'))) cell.addEventListener('click', cellAttack);
    });
  }
  function init() {
    const startButton = document.querySelector('.start');
    const restartButton = document.querySelector('.restart');

    startButton.addEventListener('click', () => {
      UI.startGame(player, computer);
      const computerBoardCells = Array.from(document.querySelectorAll('.computer .cell'));
      computerBoardCells.forEach((cell) => {
        cell.addEventListener('click', cellAttack);
      });
    });

    restartButton.addEventListener('click', () => {
      // TODO: create new mock instead of reloading
      window.location.reload();
    });
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', EventHandlers.init());
