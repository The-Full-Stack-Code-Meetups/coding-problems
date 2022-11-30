// This problem was asked by Google.
// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.
// For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
// You may also use a list or array to represent a set.
//Difficulty: Easy

function powerSet(arr) {
    const result = [];
  
    //Length of the array
    const { length } = arr;
  
    //Find the number of possible combinations
    const numberOfCombinations = 2 ** length;
  
    //For Loop 1. 
    for (
      let combinationIndex = 0;
      combinationIndex < numberOfCombinations;
      combinationIndex += 1
    ) {
  
      //SubSet with all the new mini-arrays
      const subSet = [];
      // console.log(subSet)
      //For Loop 2.
      for (
        let setElementIndex = 0;
        setElementIndex < arr.length;
        setElementIndex += 1
      ) {
  
        
        //Bitwise operator   ↓ and left shift "<<", return a new Number
        if (combinationIndex & (1 << setElementIndex)) {
          
          //Push into the sub
          subSet.push(arr[setElementIndex]);
        }
      }
      
      result.push(subSet);
    }
  
      return result
  }
  
  console.log(powerSet([1, 2, 3]));
  