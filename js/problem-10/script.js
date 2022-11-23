// This problem was asked by Palantir.
// Write a program that checks whether an integer is a palindrome.
// For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.
// Do not convert the integer into a string.


function palindromeNumber(number){
    let initialNumber = number
    var digit, reversed = 0
  
      while( number ){
          //Get right-most digit. Ex. 123/10 → 12.3 → 3
          digit = number % 10
  
          //Add the "digit" to the reversed number
          reversed = (reversed * 10) + digit
  
          //Remove the right-most digit from the starting number
          number = number/10 | 0
      }  
  
      const answer = (initialNumber === reversed) ? "Palindrome" : "Not a palindrome"
      return answer
  }
  
  
  console.log(palindromeNumber(89798)) //Palindrome 
  console.log(palindromeNumber(781)) //Not a palindrome
  console.log(palindromeNumber(121)) //Palindrome
  console.log(palindromeNumber(678)) //Not a palindrome