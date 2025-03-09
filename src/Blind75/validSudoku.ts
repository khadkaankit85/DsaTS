/*
You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false
Note: A board does not need to be full or be solvable to be valid.
*/

class Solution {
  isValidSudoku(board: string[][]) {
    //to identify the current row
    let row: Map<number, Set<string>> = new Map();
    let column: Map<number, Set<string>> = new Map();
    let smallBoard: Map<string, Set<string>> = new Map();

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let currentCell = board[i][j];
        if (currentCell != ".") {
          //to check for the row
          const currentRow = row.get(i);
          if (currentRow?.has(currentCell)) {
            return false;
          } else {
            const defaultRow = row.get(i) || new Set();
            defaultRow.add(currentCell);
            row.set(i, defaultRow);
          }
          //to check for the column
          const currentColumn = column.get(j);
          if (currentColumn?.has(currentCell)) {
            return false;
          } else {
            const defaultColumn = column.get(j) || new Set();
            defaultColumn.add(currentCell);
            column.set(j, defaultColumn);
          }
          //to check in the 3X3 box
          const currentBoardRow = Math.floor(i / 3);
          const currentBoardColumn = Math.floor(j / 3);
          const currentKey = `${currentBoardRow},${currentBoardColumn}`;

          const currentRowInSmallBoard = smallBoard.get(currentKey);
          if (currentRowInSmallBoard?.has(currentCell)) {
            return false;
          } else {
            const defaultSmallBoardRow =
              smallBoard.get(currentKey) || new Set();
            defaultSmallBoardRow.add(currentCell);
            smallBoard.set(currentKey, defaultSmallBoardRow);
          }
        }
      }
    }
    return true;
  }
}
const solution = new Solution();
const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(solution.isValidSudoku(board));
