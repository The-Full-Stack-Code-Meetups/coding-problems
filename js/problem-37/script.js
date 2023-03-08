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