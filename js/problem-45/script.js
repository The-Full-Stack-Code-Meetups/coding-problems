/* Problem 45 
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

 

Constraints:

    1 <= nums.length <= 6
    -10 <= nums[i] <= 10
    All the integers of nums are unique.


*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    
if(nums.length === 0) return [[]];
if(nums.length === 1) return [[nums[0]]];

let res = [];

for(let i = 0; i < nums.length; i++){
	let curr = nums[i];
  let restn = nums.slice(0, i).concat(nums.slice(i + 1))
  
  let permuteArrs = permute(restn)
  
  for(let j = 0; j < permuteArrs.length; j++){
  	let permuteArr = [curr].concat(permuteArrs[j])
    res.push(permuteArr);
  }
}
return res;

}
console.log(permute([1, 2, 3]))
