import Gameboard from '../Gameboard/Gameboard';
import Player from '../Player/Player';
import Computer from './Computer';

test('Computer is defined', () => {
  expect(Computer).toBeDefined();
});

test('attack method is defined', () => {
  expect(Computer().attack).toBeDefined();
});

describe('attack', () => {
  test('attack method sends random attack to enemy gameboard', () => {
    // Create computer
    const AI = Computer();

    // Create enemy and attack coordinates
    const enemy = Player(Gameboard());

    // Attack using the computer
    AI.attack(enemy);

    expect(Array.isArray(enemy.gameboard.missedAttacks[0])).toBe(true);
  });

  test('attack method doesnt attack the same coordinates twice', () => {
    // Create computer
    const AI = Computer();

    // Create enemy
    const enemy = Player(Gameboard());
    const { gameboard } = enemy;

    // Attack every single coordinate except [9, 9]
    for (let i = 0; i < enemy.gameboard.grid.length; i++) {
      for (let j = 0; j < enemy.gameboard.grid[i].length; j++) {
        if (i === 9 && j === 9) break;
        gameboard.receiveAttack([i, j]);
      }
    }

    // Attack using the computer
    AI.attack(enemy);

    // Check to see if coordinate [9, 9] is attacked
    expect(Array.isArray(gameboard.missedAttacks[gameboard.missedAttacks.length - 1])).toBe(true);
  });
});
