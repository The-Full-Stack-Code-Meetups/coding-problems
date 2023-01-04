  //Recursive answer
  let fibonacciPosition2 = function fib(n) {
    if(n<=1){
      return n
    } return fib(n-2) + fib(n-1)
  }

//Complicated Answer
let fibonacciPosition1 = function fibonacci(position) {
    //Create fibonacciNumbers Array
    let fibonacciNumbers = [0, 1];
  
    //Array check
    let lengthAr = fibonacciNumbers.length
  
    //While the length of the array is less than the "position"
    while (lengthAr < position) {
      for(let i=0; i<position;i++){
  
        //Find the next number
        let sum = fibonacciNumbers[fibonacciNumbers.length-1]
        + fibonacciNumbers[fibonacciNumbers.length-2]
  
        //Push into the array
        fibonacciNumbers.push(sum)
        lengthAr++
      }
    }
    //Return the "position" element
    return fibonacciNumbers[position];
  };

  console.log(fibonacciPosition1(5)); //5
  console.log(fibonacciPosition1(10)); //55
  console.log(fibonacciPosition1(29)); //514229
  
  console.log(fibonacciPosition2(5)); //5
  console.log(fibonacciPosition2(10)); //55
  console.log(fibonacciPosition2(29)); //514229