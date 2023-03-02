/* 
Problem 36
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 /
 
 /
Input - we are getting two strings - s and t
Output - we should return true or false, whether we can replace the characters in s, to get t
Constraints - Order must be preserved
Edge Cases - not the same length, not the same order
*/
var isIsomorphic = function(s, t) {

    if(s.length !== t.length){
        return false;
    }


// A map for the character=>count mappings
const mapS = new Map();
const mapT = new Map();


for(let i = 0; i <     s.length; i++){

    const chS = s[i];
  const chT = t[i];

// We will now check if chS has already been mapped to a different character in t
    if(mapS.has(chS) && mapS.get(chS) !== chT) {
      return false;
  }

  if(mapT.has(chT) && mapT.get(chT) !== chS){
      return false;
  }

  mapS.set(chS, chT);
  mapT.set(chT, chS);
}
return true;
};

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar')) 
