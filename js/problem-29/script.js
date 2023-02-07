/*
Problem 29
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:

Input: columnNumber = 1
Output: "A"

Example 2:

Input: columnNumber = 28
Output: "AB"

Example 3:

Input: columnNumber = 701
Output: "ZY"

*/

// Solution 1
function numberToChars(num){
	// base case
  
  if(num < 27) return String.fromCharCode(num + 64);

let s = '';

let temp = num % 26;

while(num > 0){
	temp = temp === 0 ? 26 : temp;
    
    s = String.fromCharCode(temp + 64) + s;

  num -= 26;
  num /= 26;
  
}
return s;
}

console.log(numberToChars(703))

// Solution 2
var convertToTitle = function (n) {
  var A = 'A'.charCodeAt(0);
  var str = '';
  while (n > 0) {
    n--;
    str = String.fromCharCode(A + (n % 26)) + str;
    n = parseInt(n / 26);
  }

  console.log(str);
};

convertToTitle(10);
