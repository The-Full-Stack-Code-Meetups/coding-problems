/*
 Problem 43

Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.

*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    
    let countPopped = 0;
    
    let stack = [];
    
    pushed.forEach((num) => {
     stack.push(num);
     console.log(stack)
     while(stack.length > 0 && stack[stack.length - 1] == popped[countPopped]){
     	console.log('Popping' + stack.pop());
     	console.log('CountPopped' + countPopped++);	    	
    	}
      
    });
    
   
    return stack.length === 0 ? true : false;
    
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
