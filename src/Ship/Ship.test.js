import Ship from './Ship';

test('Ship is defined', () => {
  expect(Ship).toBeDefined();
});

test('Ship length property is defined', () => {
  expect(Ship(null).length).toBeDefined();
});

test('Ship hits property is defined', () => {
  expect(Ship(null).hits).toBeDefined();
});

test('Ship hit method is defined', () => {
  expect(Ship(null).hit).toBeDefined();
});

test('Ship isSunk method is defined', () => {
  expect(Ship(null).isSunk).toBeDefined();
});

test('Check ship length', () => {
  expect(Ship(2).length).toBe(2);
  expect(Ship(5).length).toBe(5);
});

test('Hit method increments hits property', () => {
  const ship = Ship(null);
  ship.hit();
  expect(ship.hits).toBe(1);
  ship.hit();
  expect(ship.hits).toBe(2);
});

test('isSunk method checks if a ship is considered sunk', () => {
  const ship = Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
