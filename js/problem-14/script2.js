class HitCounter {
  /**
   * HitCounter constructor
   */
  constructor() {
    this.timestamps = [];
  }

  /**
   * Records a hit that happened at timestamp
   * @param  {number} timestamp
   * @return {void}
   */
  record(timestamp) {
    this.timestamps.push(timestamp);
  }

  /**
   * Returns total number of hits recorded
   * @return {number}
   */
  total() {
    return this.timestamps.length;
  }

  /**
   * Returns number of hits between timestamps (inclusive)
   * @param  {number} lower
   * @param  {number} upper
   * @return {number}
   */
  range(lower, upper) {
    // Time Complexity: O(N)
    return this.timestamps.reduce((total, curr) => {
      return curr <= upper && curr > lower ? total + 1 : total + 0;
    }, 0);
  }
}
