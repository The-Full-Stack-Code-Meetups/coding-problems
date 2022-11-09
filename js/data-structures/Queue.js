class Queue {
  /**
   * Queue constructor
   * @param {Array} [items=[]]
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Add an item to back of the queue
   * @param  {*} item
   */
  enqueue(item) {
    this.items.push(item);
  }

  /**
   * Remove an item from front of the queue
   * @return {*}
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Returns the top/front most element
   * @return {*}
   */
  peek() {
    return this.items[0];
  }

  /**
   * Determines if queue is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }
}

export default Queue;
