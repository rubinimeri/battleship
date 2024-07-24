import Gameboard from './Gameboard';

// Check if defined

test('Gameboard is defined', () => {
  expect(Gameboard).toBeDefined();
});

test('Grid property is defined', () => {
  expect(Gameboard().grid).toBeDefined();
});

test('placeShip method is defined', () => {
  expect(Gameboard().placeShip).toBeDefined();
});

test('receiveAttack method is defined', () => {
  expect(Gameboard().receiveAttack).toBeDefined();
});

test('allShipsSunk method is defined', () => {
  expect(Gameboard().allShipsSunk).toBeDefined();
});

test('ships property is defined', () => {
  expect(Gameboard().ships).toBeDefined();
});

test('missedAttacks property is defined', () => {
  expect(Gameboard().missedAttacks).toBeDefined();
});

test('successfulAttacks property is defined', () => {
  expect(Gameboard().successfulAttacks).toBeDefined();
});

test('randomizeShips method is defined', () => {
  expect(Gameboard().randomizeShips).toBeDefined();
});

test('removeShips method is defined', () => {
  expect(Gameboard().removeShips).toBeDefined();
});

// Grid property

describe('Gameboard grid', () => {
  test('Grid is array', () => {
    expect(Array.isArray(Gameboard().grid)).toBe(true);
  });

  test('Grid length is 10', () => {
    expect(Gameboard().grid.length).toBe(10);
  });

  test('Grid is 2 dimensional', () => {
    expect(Gameboard().grid[0][0]).toBeDefined();
  });

  test('Grid has property ship that checks if there is a ship on that coordinate', () => {
    expect(Gameboard().grid[0][0].ship).toBeDefined();
  });

  test('Grid has property missedAttack that keeps track of missed attacks', () => {
    expect(Gameboard().grid[0][0].missedAttack).toBeDefined();
  });
});

// placeShip method

describe('placeShip', () => {
  const shipLength = 4;
  const gameboard = Gameboard();

  test('placeShip takes coordinates, ship length and adds that ship to the given coordinates', () => {
    const coordinates = [0, 0];
    const [row, column] = coordinates;
    gameboard.placeShip(coordinates, shipLength);
    expect(gameboard.grid[row][column].ship).toBeDefined();
  });

  test('placeShip checks if ship is too long to fit on a certain coordinate', () => {
    const coordinates = [1, 7];
    expect(gameboard.placeShip(coordinates, shipLength)).toBe(false);
  });

  test('placeShip checks if there is a ship on that coordinate', () => {
    const shipLength2 = 2;

    gameboard.placeShip([0, 0], shipLength);

    expect(gameboard.placeShip([0, 0], shipLength2)).toBe(false);
    expect(gameboard.placeShip([0, 1], shipLength2)).toBe(false);
    expect(gameboard.placeShip([0, 2], shipLength2)).toBe(false);
    expect(gameboard.placeShip([0, 3], shipLength2)).toBe(false);
  });

  test('placeShip pushes all ship to ships property', () => {
    gameboard.placeShip([0, 0], shipLength);

    expect(gameboard.ships[0]).toBeDefined();

    gameboard.placeShip([0, 4], 3);

    expect(gameboard.ships[1]).toBeDefined();
  });
});

// receiveAttack method

describe('receiveAttack', () => {
  test('receiveAttack changes missedAttack to true when there is no ship on that coordinate', () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack([0, 0]);
    const { missedAttack } = gameboard.grid[0][0];

    expect(missedAttack).toBe(true);
  });

  test('receiveAttack changes missedAttack to false when a ship is hit', () => {
    const gameboard = Gameboard();
    const coordinates = [0, 0];
    const [row, column] = coordinates;
    const shipLength = 3;

    gameboard.placeShip(coordinates, shipLength);

    gameboard.receiveAttack(coordinates);

    expect(gameboard.grid[row][column].missedAttack).toBe(false);
  });

  test('Each missed attack coordinates are added to missedAttacks property', () => {
    const gameboard = Gameboard();

    gameboard.receiveAttack([0, 0]);

    expect(Array.isArray(gameboard.missedAttacks[0])).toBe(true);
  });

  test('Each successful attack of a ship is added to successfulAttacks property', () => {
    const gameboard = Gameboard();
    const coordinates = [0, 0];
    const shipLength = 3;

    gameboard.placeShip(coordinates, shipLength);

    gameboard.receiveAttack(coordinates);

    expect(Array.isArray(gameboard.successfulAttacks[0])).toBe(true);
  });

  test('receiveAttack sends a hit to a ship', () => {
    const gameboard = Gameboard();
    const coordinates = [0, 0];
    const [row, column] = coordinates;
    const shipLength = 3;

    gameboard.placeShip(coordinates, shipLength);

    gameboard.receiveAttack(coordinates);
    const { ship } = gameboard.grid[row][column];
    const ship2 = gameboard.grid[row][column + 1].ship;
    const ship3 = gameboard.grid[row][column + 2].ship;
    const ship4 = gameboard.grid[row][column + 3].ship;

    expect(ship.hits).toBe(1);
    expect(ship2.hits).toBe(1);
    expect(ship3.hits).toBe(1);
    expect(ship4).toBeFalsy();
  });
});

describe('allShipsSunk', () => {
  test('Returns false if ship isnt sunk', () => {
    const gameboard = Gameboard();

    const shipLength = 1;
    gameboard.placeShip([0, 0], shipLength);

    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test('Returns true if ship is sunk', () => {
    const gameboard = Gameboard();

    const shipLength = 1;
    gameboard.placeShip([0, 0], shipLength);

    gameboard.receiveAttack([0, 0]);
    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test('Returns false if multiple ships are sunk but one is remaining', () => {
    const gameboard = Gameboard();

    const shipLength = 1;
    gameboard.placeShip([0, 0], shipLength);
    gameboard.placeShip([1, 0], shipLength);
    gameboard.placeShip([2, 0], shipLength);

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([1, 0]);

    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test('Returns true if all ships are sunk', () => {
    const gameboard = Gameboard();

    const shipLength = 1;
    gameboard.placeShip([0, 0], shipLength);
    gameboard.placeShip([1, 0], shipLength);
    gameboard.placeShip([2, 0], shipLength);

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([1, 0]);
    gameboard.receiveAttack([2, 0]);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});

// randomizeShips method

test('Random ship placement', () => {
  const gameboard = Gameboard();

  gameboard.randomizeShips();
  expect(gameboard.ships.length).toBe(5);
});

// removeShips method

test('Removes all ships from grid', () => {
  const gameboard = Gameboard();

  gameboard.randomizeShips();
  gameboard.removeShips();

  expect(gameboard.ships.length).toBe(0);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      expect(gameboard.grid[i][j].ship).toBe(null);
    }
  }
});
