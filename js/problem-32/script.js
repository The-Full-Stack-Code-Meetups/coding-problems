/* Problem 32

Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.
For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 because there's only one word "cat" in between the two words.

*/

function findAlgorithm(a, b, sentence){

// use case

if(a === b){
return null;
}

let getWords = sentence.split(' ')

 
// The total length of the string is the minimum distance for now

let minDist = getWords.length + 1;

// We will now start traversing through the entire string
for(let index = 0; index < getWords.length; index++){
	if(getWords[index] == a){
  	for(let sindex = 0; sindex < getWords.length; sindex++){
    		if(getWords[sindex] === b){
        	// We will define the distance as the index of the first word minus the index of the second word
          
         let currEl = Math.abs(index - sindex) - 1;
         // we will compare the current distance between the previously assumed
         if (currEl < minDist){
         	minDist = currEl;
         }
        }
    }
  }
}
	return minDist;
}

console.log(findAlgorithm('hello', 'world', 'dog cat hello cat dog hello cat world'));
