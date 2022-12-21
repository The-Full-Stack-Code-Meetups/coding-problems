/* Problem 18 

This problem was asked by Microsoft.
Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.
For example, given [5, 10, 15, 20, 25], return the sets {10, 25} and {5, 15, 20}, which has a difference of 5, which is the smallest possible difference.

*/

/*
	@param {number[]} arr
	@return number[][]
*/

function divideArr(arr){
	// Calculating the sum of all the elements in the array
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  
  // We then define a two-dimensional array, using dynamic programming. We make rows - rows, and sum+1 columns, and n is the length of the input array, and sum is the sum of all the elements in the array
  
 	const n = arr.length;
  const dp = new Array(n + 1);

  
  for(let i = 0; i <= n; i++){
  	dp[i] = new Array(sum + 1).fill(false);
    
  }
  
  // Then we initialise the first column of the array to True. This will represent the fact that it is possible to get a sum of 0 using a subset in the array.
  
  for(let i = 0; i <= n; i++){
  	dp[i][0] = true;
  }
  

    // Define an array to store the elements included in each subset
  const subsets = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    subsets[i] = new Array(sum + 1);
  }
  
  

    // Iterate over the rows of the array from 1 to n
    
    for(let i = 1; i <= n; i++){
    	// We then iterate over the columns of the array from 1 to sum
      for(let j = 1; j <= sum; j++){
      	      // If the value in the previous row and current column is True, set the value in the current row and current column to True. This represents the fact that the current sum can be obtained by including the current element
      if (dp[i - 1][j]) {
        dp[i][j] = true;
        subsets[i][j] = subsets[i - 1][j];
}
// If the value in the previous row and column sum - arr[i-1] is True, set the value in the current row and current column to True. This represents the fact that the current sum can be obtained by not including the current element
if (j >= arr[i - 1] && dp[i - 1][j - arr[i - 1]]) {
dp[i][j] = true;

subsets[i][j] = [...(subsets[i - 1][j - arr[i - 1]] || []), arr[i - 1]];
}
      }
    }

// Initialize a variable to store the smallest difference
let minDifference = Number.MAX_VALUE;
let subset1;
let subset2;

// Iterate over the columns of the array from sum/2 to 0
for (let j = sum / 2; j >= 0; j--) {
// If the value in the last row and current column is True, update the smallest difference and the subsets
if (dp[n][j]) {
const diff = sum - 2 * j;
if (diff < minDifference) {
minDifference = diff;
subset1 = subsets[n][j];
subset2 = arr.filter(x => !subset1.includes(x));
}
}
}

return [subset1, subset2];
}

// Example usage
console.log(divideArr([5, 10, 15, 20, 25])); // Output: [[10, 25], [5, 15, 20]]




