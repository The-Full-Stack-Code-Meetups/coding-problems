/* Problem 10 
This problem was asked by Palantir.

Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.
*/

function isPalindrome(num){

let rem;
const temp = num;
let final = 0;

while(num > 0) {
	rem = num % 10;
  num = Number.parseInt(num / 10, 10);
  final = final * 10 + rem;
}

return final === temp;

}

console.log(isPalindrome(121))
