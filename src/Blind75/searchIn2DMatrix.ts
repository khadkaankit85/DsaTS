/*
Search a 2D Matrix
You are given an m x n 2-D integer array matrix and an integer target.
Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.
Can you write a solution that runs in O(log(m * n)) time?
Example 1:
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
Output: true
*/

class Solution {
  searchMatrix(matrix: number[][], target: number) {
    let top = 0;
    let bottom = matrix.length - 1;
    while (top <= bottom) {
      const mid = Math.floor((top + bottom) / 2);
      if (target > matrix[mid][matrix[mid].length - 1]) {
        top = mid + 1;
      } else if (target < matrix[mid][0]) {
        bottom = mid - 1;
      } else {
        const row = mid;
        let left = 0;
        let right = matrix[row].length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (target === matrix[row][mid]) {
            return true;
          } else if (target < matrix[row][mid]) {
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        }
      }
    }
    return false;
  }
}

const solution = new Solution();
const matrix = [
    [1, 2, 4, 8],
    [10, 11, 12, 13],
    [14, 20, 30, 40],
  ],
  target = 10;
console.log(solution.searchMatrix(matrix, target));
