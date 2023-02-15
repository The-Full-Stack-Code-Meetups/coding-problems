// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.


const number = (num, k) => {
  if(!(num.length>10^4)) return false

  let res = (
    String(
      +num.join('')+k)
      ).split('')


  return res
}


console.log(number([1,2,0,0], 34)) //["1", "2", "3", "4"]
console.log(number([5,5,0,9,9], 59)) //["5", "5", "1", "5", "8"]
