 /* Problem 1 
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N. You should be as efficient with time and space as possible.
You should be as efficient with time and space as possible.
*/

/* Defining data structure with methods */

class Logger {
/* @param { number } size
*/
constructor(size){
	this.size = size
	this.log = [];
	this.currI = 0;
}

/*
 * @param {number} order_id
 */
record(order_id){
	this.log[currI] = order_id
	this.currI = (this.currI + 1) % this.size
}

/* 
 * @param {number} i
 * @return {number}
 */
get_last(i){
	return this.log[(this.currI - i + this.size) % this.size]
}

}
