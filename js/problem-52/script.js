/* Problem 52 

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
 

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
  var minPathSum = function(grid) {
      let sum = 0;

      let rowCount = grid.length;
      let colCount = grid[0].length

      let startRow = 0;
      let endRow = rowCount - 1;

      let startCol = 0;
      let endCol = colCount - 1;

      // dynamic programming
      const dp = new Array(rowCount)
      for(let i = 0; i < rowCount; i++){
        dp[i] = new Array(colCount)
      }

          dp[0][0] = grid[0][0]
     for (let col = 1; col < colCount; col++) {
      dp[0][col] = dp[0][col - 1] + grid[0][col];
    }

     for (let row = 1; row < rowCount; row++) {
      dp[row][0] = dp[row - 1][0] + grid[row][0];
    }

    for (let row = 1; row < rowCount; row++) {
      for (let col = 1; col < colCount; col++) {
        dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1]) + grid[row][col];
      }
    }

      return dp[rowCount - 1][colCount - 1];


  };

  console.log(minPathSum([[1,2,3], [4,5,6]]))
  console.log(minPathSum( [[1,3,1],[1,5,1],[4,2,1]] ))
