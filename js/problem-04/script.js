/* This problem was asked by Microsoft.
Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string abracadabra and the pattern abr, you should return [0, 7].

*/

/* Program to find the pattern 
 * @param {string} str
 * @param {string} pat
 * @return {string[]}
 */

function findPattern(str, pat){

let startingIndex = 0;
let indices = [];
let patternL = pat.length;

while(str.indexOf(pat, startingIndex) !== -1){
indices.push(str.indexOf(pat, startingIndex));
startingIndex = str.indexOf(pat, startingIndex) + 1;
}
return indices;
}


console.log(findPattern('abracadabra', 'abr'))
