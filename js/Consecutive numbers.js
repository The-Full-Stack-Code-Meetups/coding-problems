// This problem was asked by Microsoft.
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
// For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.
// Your algorithm should run in O(n) complexity.

// @param {number[]} array
// @return {number}

function task(array){
    if(array.length === 0) return 0


    let sorted = array.sort(function(a, b){return a-b});
    let results = []
  
    for(let i=0; i<sorted.length; i++){
      let element = sorted[i]+1
      let lengthOf = 1
  
      while(sorted.includes(element)){
        lengthOf ++
        element ++
      } 
      results.push(lengthOf)
    }
    return Math.max(...results)
  }
  
  
  console.log(task([100, 4, 200, 1, 3, 2])) //4
  console.log(task([100, 9, 200, 1, 3, 2])) //3
  console.log(task([100, 1,0, 200, 7, 6, -1])) //3