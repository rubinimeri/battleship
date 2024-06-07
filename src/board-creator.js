import './styles/style.css';

// Factory function to create cell elements
function createCellElement() {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  return cell;
}

// Function to create the game board
function createBoard() {
  const body = document.querySelector('body');
  const board = document.createElement('div');
  board.classList.add('board');
  body.append(board);

  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 10; j++) {
      const cell = createCellElement();
      row.appendChild(cell);
    }

    board.append(row);
  }
}

createBoard();
createBoard();
