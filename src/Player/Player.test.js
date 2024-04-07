import Player, { Computer } from "./Player";
import Gameboard from "../Gameboard/Gameboard";

test('Player is defined', () => {
    expect(Player).toBeDefined();
})

test('gameboard is defined', () => {
    expect(Player(Gameboard()).gameboard).toBeDefined();
})

test('turn is defined', () => {
    expect(Player().turn).toBeDefined();
})

test('sendAttack method is defined', () => {
    expect(Player().sendAttack).toBeDefined();
})

// gameboard property

describe('gameboard', () => {
    test('gameboard is Gameboard object', () => {
        const gameboard = Gameboard();

        const player = Player(gameboard);
        const grid = player.gameboard.grid;

        expect(grid).toBeDefined();
    })
})

// turn property

describe('turn', () => {
    test('turn property changes when sendAttack method is called', () => {
        const gameboard = Gameboard();
        const enemyGameboard = Gameboard();

        const player = Player(gameboard);
        const enemy = Player(enemyGameboard);

        player.turn = true;
        player.sendAttack([0, 0], enemy);

        expect(player.turn).toBe(false);
        expect(enemy.turn).toBe(true);

        enemy.sendAttack([0, 0], player);

        expect(player.turn).toBe(true);
        expect(enemy.turn).toBe(false);
    })

    test('Attack functionality for empty coordinate', () => {
        const gameboard = Gameboard();
        const enemyGameboard = Gameboard();

        const player = Player(gameboard);
        const enemy = Player(enemyGameboard);

        const attackCoordinates = [0, 0];
        const [row, column] = attackCoordinates;

        player.sendAttack(attackCoordinates, enemy);

        const enemyCoordinate = enemy.gameboard.grid[row][column];

        expect(enemyCoordinate.missedAttack).toBe(true);
    })

    test('Attack functionality for ship', () => {
        const gameboard = Gameboard();
        const enemyGameboard = Gameboard();

        const player = Player(gameboard);
        const enemy = Player(enemyGameboard);

        const shipLength = 2;
        const attackCoordinates = [0, 0];
        const [row, column] = attackCoordinates;

        enemy.gameboard.placeShip(attackCoordinates, shipLength);
        player.sendAttack(attackCoordinates, enemy);

        const enemyShip = enemy.gameboard.grid[row][column].ship;

        expect(enemyShip.hits).toBe(1);
    })
})

// computer function

describe('computer', () => {
    test('Has property enemyGameboard', () => {
        expect(Computer(Gameboard()).enemyGameboard).toBeDefined();
    })

    /* test('Uses enemy gameboard to send a random attack', () => {
        const enemyGameboard = Gameboard();

        const computer = Computer(enemyGameboard);

        const attackCoordinates = [0, 0];
        const [row, column] = attackCoordinates;

        computer.randomAttack();

        const enemyCoordinate = computer.enemyGameboard.grid[row][column];

        expect(enemyCoordinate.missedAttack).toBe(true);
    }) */
})