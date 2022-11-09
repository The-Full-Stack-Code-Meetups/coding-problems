/* Problem 7
This problem was asked by Google.

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push(item) or pop() from a stack, and enqueue(item) or dequeue() from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

Hint: Try working backwards from the end state.
*/

import Stack from '../data-structures/Stack';
import Queue from '../data-structures/Queue';

/* Interleaving first half of stack with the second half reversed 
 * @param {number[]} items
 * @return {number[]}
*/

function interleaveItems(items) {
	// base case
  if (items.length === 0) return items;
  
  // finding the midpoint of the items
  
  const midpoint = Math.floor(items.length / 2);
  const stack = new Stack(items);
  const queue = new Queue();
  
  // Enqueue popped elements from stack until midpoint is reached
  while(stack.items.length !== midpoint) {
  	queue.enqueue(stack.pop())
  }
  
  // interleaving elements until midpoint 
  
  let i = midpoint;
  while(!queue.isEmpty()) {
		if(i > 1){
    	const temp = stack.pop();
      stack.push(queue.dequeue());
      stack.push(temp);
    } else {
		stack.push(queue.dequeue())
  }
  i-= 1
  }
  return stack.items;
}

console.log(interleaveItems([1, 2, 3, 4, 5]));
