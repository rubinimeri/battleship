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

  for (let i = 0; i < 100; i++) {
    const cell = createCellElement();
    board.appendChild(cell);
  }
}

createBoard();
createBoard();
