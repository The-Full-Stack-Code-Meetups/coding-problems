// Solution 1
var minEatingSpeed = function (piles, h) {
    let length = piles.length;
    const sortedPiles = piles.sort((a, b) => a - b);
    let lastElement = sortedPiles[length - 1];
  
    if (h === length) return lastElement;
  
    let minSumArr = [];
  
    for (let i = lastElement; i > 0; i--) {
      let k = i;
      let newArr = [];
  
      for (let j = 0; j < length; j++) {
        let currK = Math.ceil(piles[j] / k);
        newArr.push(currK);
      }
  
      const sum = newArr.reduce((acc, cur) => acc + cur, 0);
      minSumArr.push(sum);
  
    }
    
   
    minSumArr.sort((a, b) => b - a);
    console.log(minSumArr)
  
    return minSumArr.indexOf(h) + 1;
  };
  
  console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
  console.log(minEatingSpeed([30, 11, 23, 48], 5)); // 30
  console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
  console.log(minEatingSpeed([3,20,15,1,2,7,11], 10)); // 10
  console.log(minEatingSpeed([5,10,76,10,21,31,29], 10)); // 29
//
//
// Solution 2
//
 /* Problem 37

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.



Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23



Constraints:

    1 <= piles.length <= 104
    piles.length <= h <= 109
    1 <= piles[i] <= 109

*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

var n = piles.length;
  if (h < n){
        return -1;
        }
var max = piles.reduce((a, b) => Math.max(a, b));
var lowest = 1;

var hi = max;



while(lowest < hi){
	var min = lowest + parseInt((hi - lowest) / 2);
  if(!canHappen(piles, n, h, min)){
  	lowest = min + 1;
  } else {
  hi = min;
  }
}
  return lowest;


};

function canHappen(piles, n, h, k){
	let time = 0;

  for( let i = 0; i < n; ++i){
  	time += parseInt((piles[i] - 1) / k) + 1;
  }
  return time <= h;
}

console.log(minEatingSpeed([3,6,7,11], 8))
