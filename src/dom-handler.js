export default function showPlayerShips(gameboard) {
  const { grid } = gameboard;
  const gridDOM = Array.from(document.querySelectorAll('.row'));

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j].ship !== null) {
        gridDOM[i].childNodes[j].style.backgroundColor = 'red';
      }
    }
  }
}

export function showOpponentShips(gameboard) {
  const { grid } = gameboard;
  const gridDOM = Array.from(document.querySelectorAll('.row')).slice(10);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j].ship !== null) {
        gridDOM[i].childNodes[j].style.backgroundColor = 'red';
      }
    }
  }
}
