/* Problem 26 
This problem was asked by Microsoft.

Given a number in the form of a list of digits, return all possible permutations.

For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].
*/
const permutator = (inputArr) => {
	let res = [];
  
  const permute = (arr, m = []) => {
  	if(arr.length === 0) {
    	res.push(m);
    } else {
    	for(let i = 0; i < arr.length; i++){
					let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
        }
    }
  }
  permute(inputArr);
  
  return res;
}

console.log(permutator([1, 2, 3]))
