// What will the features of the game loop be?
// Step 1: create Players and Gameboards.
// Step 2: populate each Gameboard with 5 ships with predetermined coordinates
import Gameboard from './Gameboard/Gameboard';
import Player from './Player/Player';
import Computer from './Computer/Computer';

function gameLoop() {
  // Create gameboards
  const gameboardOne = Gameboard();
  const gameboardTwo = Gameboard();

  // Create players
  const playerOne = Player(gameboardOne);
  const playerTwo = Player(gameboardTwo);

  // Create Computer
  const computer = Computer();

  // Populate gameboardOne with 5 ships
  gameboardOne.placeShip([0, 0], 5);
  gameboardOne.placeShip([2, 0], 4);
  gameboardOne.placeShip([5, 5], 3);
  gameboardOne.placeShip([3, 1], 2);
  gameboardOne.placeShip([9, 7], 1);

  // Populate gameboardTwo with 5 ships
  gameboardTwo.placeShip([4, 0], 5);
  gameboardTwo.placeShip([7, 0], 4);
  gameboardTwo.placeShip([2, 5], 3);
  gameboardTwo.placeShip([0, 1], 2);
  gameboardTwo.placeShip([1, 7], 1);
}
