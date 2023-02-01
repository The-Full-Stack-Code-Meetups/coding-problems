function findNextHigherN(num) {

    //Permutations array
    let permutations = [];
  
    //Used for the final answer
    const numStart = num;
  
    //Split the number
    let numSplit = num.toString().split("");
  
    
    function backtrack(first = 0) {
      if (first === numSplit.length) {
        permutations.push(numSplit.join(""));
        return;
      }
  
      for (let i = first; i < numSplit.length; i++) {
        [numSplit[first], numSplit[i]] = [numSplit[i], numSplit[first]];
        backtrack(first + 1);
        [numSplit[first], numSplit[i]] = [numSplit[i], numSplit[first]];
      }
    }
  
    //Get all the permutations in 
    backtrack();
  
  
    //      const numStart = num;    ↓ 
    let startingNumber = String(numStart);
    
    //Sort
    let sorted = permutations.sort();
    //Get Position
    let positionOfAnswer = (sorted.indexOf(startingNumber))+1;
   
    //Result
    let result = sorted[positionOfAnswer];
    return result;
  }
  
  console.log(findNextHigherN(1324));


