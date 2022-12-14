// This problem was asked by Amazon.
// Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
// For example, given the following matrix:

// [
//  [1,  2,  3,  4,  5],
//  [6,  7,  8,  9,  10],
//  [11, 12, 13, 14, 15],
//  [16, 17, 18, 19, 20]
// ]
// You should print out the following:

// 1
// 2
// 3
// 4
// 5
// 10
// 15
// 20
// 19
// 18
// 17
// 16
// 11
// 6
// 7
// 8
// 9
// 14
// 13
// 12

function printClockwise(matrix){
    let result = []
    if(matrix.length === 0) return result
  
    //Find the uppder and lower bounds indexes
    let rowCount = matrix.length
    let columnCount = matrix[0].length
  
    let startRow = 0
    let endRow = rowCount -1 
    let startColumn = 0
    let endColumn = columnCount -1
  
    while (endRow >= startRow && endColumn >= startColumn) {
  
      //Left to the right push
      for (let column = startColumn; column <= endColumn; column++) {
          result.push(matrix[startRow][column]);
      }
      //Increaste the start row index
      startRow++;
     
  
      //Top to bottom push (last column)
      for (let row = startRow; row <= endRow; row++) {
        result.push(matrix[row][endColumn]);
      }
      //Decrease the column index
      endColumn--;
  
      //If we are still within bounds, print the last row backwards
      if (endRow >= startRow) {
        //Walk right-left on the bottom row
          for (let column = endColumn; column >= startColumn; column--) {
            result.push(matrix[endRow][column]);
          }
  
          //Decrease the row index
          endRow--;
        }
  
        //If we are still within bounds, print the first column bottom to top
        if (endColumn >= startColumn) {
          // walk bottom-top for the start column
            for (let row = endRow; row >= startRow; row--) {
              result.push(matrix[row][startColumn]);
            }
            //Increase the column index
            startColumn++;
          }
     }
    return result
  }
  
  
  console.log(printClockwise([
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
   ]))
  