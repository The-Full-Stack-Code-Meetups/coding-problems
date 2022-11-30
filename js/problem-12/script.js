/* Problem 12 

This problem was asked by Google.

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string acbbac, return b. Given the string abcdef, return null.
*/


function firstRchar(str){

const viewed = new Set();

for(strC of str){
	if(viewed.has(strC)) return strC;
  else viewed.add(strC);
}
return null;


}

console.log(firstRchar('acbbac'));
