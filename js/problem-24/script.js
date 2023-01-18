/* 
Problem 23

This problem was asked by Bloomberg.

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters. */

function oneToOne(s1, s2){

if(s1.length !== s2.length) return false;


const map1 = new Map();
const map2 = new Map();


return [...s1].every((c, i) => {
	if(!map1.has(c) && !map2.has(s2[i])){
  	map1.set(c, s2[i]);
    map2.set(s2[i], c);
  }
  	return map1.get(c) === s2[i] && map2.get(s2[i]) === c;

})
}

console.log(oneToOne('abc', 'bad'));

