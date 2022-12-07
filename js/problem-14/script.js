/* Problem 14 
 * This question was asked by Riot Games.

Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

record(timestamp): records a hit that happened at timestamp
total(): returns the total number of hits recorded
range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
Follow-up: What if our system has limited memory?
 * */

class HitCounter {
    /* The HitCounter constructor */

	constructor(hits, currHit){
  this.hits = hits;
  this.currHit = currHit;

  }

    /* Recording each timestamp and hit */
	record(timestamp) {
  this.hits[this.currHit] = timestamp;
  this.currHit += 1;
  }
  
  total(){
  return this.currHit;
  }
  
/* Returning the range of hits between a certain interval */

  range(lower, upper) {
  return this.hits[upper] - this.hits[lower];
  }

}

let counter = new HitCounter([], 0);

counter.record(5);
counter.record(6);
counter.record(8);


console.log(counter.range(0, 2))
