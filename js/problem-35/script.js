/* Problem 35 

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

function returnTr(arr){
const result = [];
arr.sort((a, b) => a - b)

for(let i = 0; i < arr.length - 2; i++){

let left = i + 1;
let right = arr.length - 1;

while(left < right){
	const sum =  arr[i] + arr[left] + arr[right];
if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        // Skip duplicates in left and right pointers
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;

        // Skip duplicates in left pointer
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
      } else {
        right--;

        // Skip duplicates in right pointer
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
        }
}

}

return result;

}

let nums = [-1,0,1,2,-1,-4];

console.log(returnTr(nums))
