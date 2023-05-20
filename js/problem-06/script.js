/* Problem 6
This problem was asked by Facebook.
Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?
*/ 


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* Solution 1 
*/
function rotateList (list, k)  {
if(k > 2 ){
for(let i = 0; i <= k; i++){
	list.push(list.shift());
}
} else if( k <= 2){
for(let i = 0; i < k; i++){
	list.push(list.shift());
}
}

return list;
}

/* Solution 2 

function rotateList(list, k){


list.unshift(...list.splice(k))

return list

}
*/

/* Solution 3

var rotate = function(nums, k) {

for (let i = nums.length - 1; i >= 0; i--) {
   nums[i + k] = nums[i]
}

for (let i =  k - 1; i >=0; i--) {
  nums[i] = nums.pop()
}
    
    return nums
};
*/

/* Fastest solution 


var rotate = function(nums, k) {
   k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    
   let reverse = function(i, j){
    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
   } // suppose  ----->---> 
	reverse(0, nums.length-1); // reverse   <--<------
	 reverse(0, k-1) // reverse first part ---><----
   reverse(k, nums.length-1)// reverse second part --->----->
    
};

*/

console.log(rotateList([1, 2, 3, 4, 5, 6, 7], 2))
