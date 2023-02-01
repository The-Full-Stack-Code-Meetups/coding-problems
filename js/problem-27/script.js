/* Problem 27
This problem was asked by Amazon.

Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

For example, this matrix has 4 islands.

1 0 0 0 0
0 0 1 1 0
0 1 1 0 0
0 0 0 0 0
1 1 0 0 1
1 1 0 0 1
*/

// Depth first search helper function
// @param {number[][]} matrix
// @param {number} r
// @param {number} c
// @return {number}

class Island {

  constructor(land) {
    this.land = land;
    this.rows = land.length;
    this.columns = land[0].length;
    this.visited = land.map((a) => a.map(() => false))
  }

  count = null
  neighborIndices = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  isSafe(row, col) {
    return (
      // Within bounds
      row >= 0 &&
      row < this.rows &&
      col >= 0 &&
      col < this.columns &&
      // Is part of island
      this.land[row][col] === 1 &&
      // Is not already visited
      !this.visited[row][col]
    )
  }

  // Depth First Search
  search(row, col) {
    this.visited[row][col] = true

    this.neighborIndices.forEach(([rowNeighborIndex, colNeighborIndex]) => {
      if (this.isSafe(row + rowNeighborIndex, col + colNeighborIndex)) {
        // Recursively call for all neighbors
        this.search(row + rowNeighborIndex, col + colNeighborIndex)
      }
    })
  }

  countIslands() {
    if (this.count !== null) return this.count

    this.count = 0

    this.land.forEach((columns, i) => {
      columns.forEach((island, j) => {
        if (island === 1 && !this.visited[i][j]) {
          this.search(i, j)
          this.count++
        }
      })
    })

    return this.count
  }
}

const island = new Island([
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 1],
])
console.log(island.countIslands())

