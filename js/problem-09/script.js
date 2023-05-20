/*
This problem was asked by Google.

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].*/

/* Program to check and split the palindromes into few strings as possible *

* @param {string} str
* @return {string[]} 
*/


function checkPalindrome(str){
if(str.length <= 3 && !isPalindrome(str)) return str.split('')

const palindromesFinal = [];
let temp = '';

for(let i = 0; i < str.length; i++){
	
  if(isPalindrome(temp)){
  	palindromesFinal.push(temp);
    temp = ''
  }
  
  temp += str[i];
}

if(isPalindrome(temp)) palindromesFinal.push(temp);
else palindromesFinal.push(...temp)

return palindromesFinal;

}

/* Checking if a string is a palindrome
* @param {string} str
* @return {boolean}
*/

function isPalindrome(str){
if(str.length <= 1) return false;

const backward = str.split('').reverse().join('');

if(backward == str) return true;
else return false;

}


console.log(checkPalindrome('racecarannakayak'))
