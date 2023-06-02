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

 def minPathSum(grid):
    rowCount = len(grid)
    colCount = len(grid[0])

    # Create a 2D grid to store the minimum path sum
    dp = [[0] * colCount for _ in range(rowCount)]

    dp[0][0] = grid[0][0]

    # Fill the first row
    for col in range(1, colCount):
        dp[0][col] = dp[0][col - 1] + grid[0][col]

    # Fill the first column
    for row in range(1, rowCount):
        dp[row][0] = dp[row - 1][0] + grid[row][0]

    # Fill the remaining cells
    for row in range(1, rowCount):
        for col in range(1, colCount):
            dp[row][col] = min(dp[row - 1][col], dp[row][col - 1]) + grid[row][col]

    # Return the minimum path sum at the bottom-right cell
    return dp[rowCount - 1][colCount - 1]

print(minPathSum([[1,2,3], [4,5,6]]))
print(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))

