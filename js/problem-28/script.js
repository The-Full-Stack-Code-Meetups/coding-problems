// Solution 1
const MissingNumber = function(array){
  let result =[]

  // Remove all integers less than 1 and sort the array
  let filteredSorted = array.filter(e => e>0).sort((a,b) => a-b)

  filteredSorted.reduce((acc, element) =>{
    // console.log(`${acc} ${element}`)

  // If the accumulator is different than the element => push into results
    if(acc !== element){
      result.push(acc)
    }
    return acc+=1
  }, 1)

  // Make sure we have a missing number into the array and return the first result
  if(result[0]){
    return result[0]
  }   return "No missing numbers in your array"
}

// Solution 2
function MissingNumber(arr){
  let newSet = new Set(arr);
let num = 1;
while(newSet.has(num)){
num++
}
return num;
}


console.log(MissingNumber([-1,5,1,2,5,6,7,8])) //3
console.log(MissingNumber([-10,-10, 8,90,6,7,8])) //1
console.log(MissingNumber([0,0,0,1,2,3,7,6,5,4])) //7