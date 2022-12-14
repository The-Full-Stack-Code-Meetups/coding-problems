/* Problem 17
This problem was asked by Google.

Given the head of a singly linked list, swap every two nodes and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.
*/

class Node {
	constructor(val){
  	this.val = val;
    this.next = null
  }
}

function swapNodes(head){
	// creating a new linked list to store the swapped nodes
  let newHead = head;
  let tail = head;
  
  // set a pointer
  
  let p = head;
  // Iterating through the list with two nodes at the time and swapping
  
  while(p && p.next){
   // Swapping the two nodes
   let q = p.next;
   p.next = q.next;
   q.next = p;
   
   tail.next = q;
   tail = p;
  }
  
  head = newHead;
  
  return head;
}
