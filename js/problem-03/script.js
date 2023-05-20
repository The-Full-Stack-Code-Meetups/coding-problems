 /* Problem 3
This problem was asked by Square.
Given a string and a set of characters, return the shortest substring containing all the characters in the set.
For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".
If there is no substring containing all the characters in the set, return null. */

/* We will return the shortest substring containing all characters in the set
* @param {string} s
* @param {Set<string>} set
* @return {string}
*/
 
 
 function shortestSub(s, set){
 // base case
 if(s.length < set.size) return null
 
 let rStart = -1;
 let rEnd = -1;
 let rLength = Number.MAX_SAFE_INTEGER
 
 let freqCount = new Map();
 let stringStart = 0;
 let stringEnd = 0;
 
while(stringEnd < s.length){
	const char = s.charAt(stringEnd);
  
  if(set.has(char)){
  // we add it to the map
  		// adding it to the map
      
      if(freqCount.has(char)){
      	freqCount.set(char, freqCount.get(char) + 1)
      } else {
      	freqCount.set(char, 1);
      }
  }
  
  while(set.size === freqCount.size) {
  	const currLength = stringEnd - stringStart + 1;
    if(currLength < rLength) {
    	rLength = currLength;
      rStart = stringStart;
      rEnd = stringEnd;
    }
    
    const startChar = s.charAt(stringStart);
    // removing count from the startChar 
    if(freqCount.has(startChar)){
    	const startCharCount = freqCount.get(startChar);
      if(startCharCount === 1) freqCount.delete(startChar);
      else {
      freqCount.set(startChar, startCharCount - 1);
      }
    }
    stringStart++
  }
  stringEnd++;
  
  }
  if(rStart === -1 && rEnd === -1 && rLength === Number.MAX_SAFE_INTEGER) return null;


return s.substring(rStart, rEnd + 1);

}

console.log(shortestSub('figehaeci', new Set(['a', 'e', 'i'])))
